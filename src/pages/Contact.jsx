import { useEffect, useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { PageHero } from "./About.jsx";
import { lab, socials } from "../data/site.js";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => document.getElementById("fullName")?.focus(), 250);
    }
  }, []);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/cdrlcistron@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      if (!response.ok) throw new Error("Submission failed");
      setSent(true);
      form.reset();
    } catch {
      setError("Sorry, the form could not be submitted right now. Please call or email the lab directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Layout>
      <PageHero title="Contact & Book a Test" text="Reach our team for laboratory tests, health packages, sample collection support, corporate checkups, or physician referral services." />
      <Band className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-5">
            <SectionHeader align="left" eyebrow="Contact" title="Cistron Diagnostic Reliable Lab" text="Hospital Chowk, Rangali Road, Biratnagar, Nepal" />
            <Info icon={FaMapMarkerAlt} text={lab.address} />
            <Info icon={FaPhoneAlt} text={lab.phones.join(" / ")} />
            <Info icon={FaEnvelope} text={lab.email} />
            <Info icon={FaClock} text={lab.hours} />
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => <a key={label} href={href} className="icon-button bg-skysoft text-primary" aria-label={label}><Icon /></a>)}
            </div>
            <iframe title="Cistron Diagnostic Reliable Lab map" className="h-80 w-full rounded-lg border-0 shadow-soft" loading="lazy" src="https://maps.google.com/maps?q=Hospital%20Chowk%20Rangali%20Road%20Biratnagar%20Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed" />
          </section>

          <section id="contact-form" className="rounded-lg border border-slate-200 bg-skysoft p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-3xl font-bold text-navy">Book a Test</h2>
            <p className="mt-3 text-slate-600">Share your details and our team will contact you shortly.</p>
            <form onSubmit={submit} action="https://formsubmit.co/cdrlcistron@gmail.com" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="_subject" value="New test booking request from CDRL website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Cistron Diagnostic Reliable Lab. Our team will contact you shortly." />
              <input id="fullName" required name="name" placeholder="Full Name" className="form-input" />
              <input required name="phone" placeholder="Phone Number" className="form-input" />
              <input required type="email" name="email" placeholder="Email Address" className="form-input" />
              <input required name="required_test" placeholder="Required Test" className="form-input" />
              <input required type="date" name="preferred_date" className="form-input" />
              <textarea name="message" placeholder="Message" rows="5" className="form-input" />
              <button className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={sending}>
                {sending ? "Submitting..." : "Submit"}
              </button>
            </form>
            {error && <p className="mt-5 rounded-lg bg-red-50 p-4 font-semibold text-red-700">{error}</p>}
            {sent && <p className="mt-5 rounded-lg bg-white p-4 font-semibold text-primary">Thank you for contacting Cistron Diagnostic Reliable Lab. Our team will contact you shortly.</p>}
          </section>
        </div>
      </Band>
    </Layout>
  );
}

function Info({ icon: Icon, text }) {
  return <p className="flex items-start gap-3 text-slate-700"><Icon className="mt-1 shrink-0 text-primary" /> {text}</p>;
}
