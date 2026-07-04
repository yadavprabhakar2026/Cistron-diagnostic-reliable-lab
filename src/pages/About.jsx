import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { FaCheckCircle } from "react-icons/fa";

const values = ["Integrity", "Accuracy", "Reliability", "Innovation", "Compassion", "Professionalism"];

export default function About() {
  return (
    <Layout>
      <PageHero title="About Cistron Diagnostic Reliable Lab" text="A patient-centered diagnostic laboratory built for scientific excellence, dependable reporting, and accessible healthcare in Biratnagar." />
      <Band className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Our Story" title="Who we are" text="Cistron Diagnostic Reliable Lab supports patients, doctors, clinics, and healthcare organizations with trusted diagnostic testing and clear reporting." />
            {["Our Laboratory", "Advanced Technology", "Experienced Professionals", "Patient-Centered Care", "Quality Assurance", "Healthcare Commitment"].map((item) => (
              <p key={item} className="mb-4 flex items-start gap-3 text-slate-700"><FaCheckCircle className="mt-1 shrink-0 text-primary" /> {item}: built into daily lab workflows for safer, faster, and more reliable healthcare decisions.</p>
            ))}
          </div>
          <img src="https://images.unsplash.com/photo-1583912267550-d44c7801a6a5?auto=format&fit=crop&w=1100&q=80" alt="Scientist working in a clean medical laboratory" className="rounded-lg object-cover shadow-soft" loading="lazy" />
        </div>
      </Band>
      <Band className="bg-skysoft">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Core Values" title="The principles behind every report" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => <div key={value} className="feature-card"><h3 className="font-heading text-xl font-bold text-navy">{value}</h3><p className="mt-3 text-slate-600">A standard we carry into patient communication, sample handling, testing, and clinical reporting.</p></div>)}
          </div>
        </div>
      </Band>
    </Layout>
  );
}

export function PageHero({ title, text }) {
  return (
    <section className="bg-gradient-to-r from-navy to-primary px-4 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sky-100">CDRL Biratnagar</p>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-sky-50">{text}</p>
      </div>
    </section>
  );
}
