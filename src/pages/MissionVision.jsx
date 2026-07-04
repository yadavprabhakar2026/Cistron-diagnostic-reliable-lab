import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { PageHero } from "./About.jsx";

const objectives = ["Improve healthcare", "Continuous innovation", "Quality management", "Staff development", "Customer satisfaction", "Community health awareness"];

export default function MissionVision() {
  return (
    <Layout>
      <PageHero title="Mission & Vision" text="Our purpose is to make advanced diagnostic services more accurate, reliable, affordable, and accessible for communities across Nepal." />
      <Band className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="feature-card">
            <p className="eyebrow">Mission</p>
            <h2 className="section-title">Accurate diagnosis with reliable reporting</h2>
            <p className="section-text">Our mission is to strengthen healthcare through accurate diagnosis, reliable reporting, affordable testing, scientific excellence, patient safety, and continuous improvement in every laboratory process.</p>
          </article>
          <article className="feature-card">
            <p className="eyebrow">Vision</p>
            <h2 className="section-title">A trusted reference lab for Nepal</h2>
            <p className="section-text">To become one of Nepal's most trusted and technologically advanced diagnostic reference laboratories, recognized for quality, compassion, and dependable clinical support.</p>
          </article>
        </div>
      </Band>
      <Band className="bg-skysoft">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Objectives" title="Practical goals that shape our growth" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective) => <div key={objective} className="feature-card"><h3 className="font-heading text-xl font-bold text-navy">{objective}</h3><p className="mt-3 text-slate-600">A measurable focus area for better patient experience and stronger clinical outcomes.</p></div>)}
          </div>
        </div>
      </Band>
    </Layout>
  );
}
