import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const submissionSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    email: String,
    requiredTest: String,
    preferredDate: String,
    message: String
  },
  { timestamps: true }
);

const contentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: String,
    body: String,
    image: String,
    data: mongoose.Schema.Types.Mixed
  },
  { timestamps: true }
);

const Submission = mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
const Content = mongoose.models.Content || mongoose.model("Content", contentSchema);

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI).catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
}

function auth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || "development-secret");
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "CDRL API" }));

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || "admin@cdrlcistron.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const valid = email === adminEmail && (await bcrypt.compare(password, await bcrypt.hash(adminPassword, 10)));
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });
  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET || "development-secret", { expiresIn: "8h" });
  return res.json({ token });
});

app.post("/api/contact", async (req, res) => {
  const submission = await Submission.create(req.body);

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO || "cdrlcistron@gmail.com",
      subject: `New test booking request from ${req.body.fullName}`,
      text: JSON.stringify(req.body, null, 2)
    });
  }

  res.status(201).json({ message: "Thank you for contacting Cistron Diagnostic Reliable Lab. Our team will contact you shortly.", submission });
});

app.get("/api/admin/submissions", auth, async (_req, res) => {
  res.json(await Submission.find().sort({ createdAt: -1 }));
});

app.get("/api/admin/content/:type", auth, async (req, res) => {
  res.json(await Content.find({ type: req.params.type }).sort({ createdAt: -1 }));
});

app.post("/api/admin/content", auth, async (req, res) => {
  res.status(201).json(await Content.create(req.body));
});

app.put("/api/admin/content/:id", auth, async (req, res) => {
  res.json(await Content.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

app.delete("/api/admin/content/:id", auth, async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`CDRL API running on port ${port}`);
});
