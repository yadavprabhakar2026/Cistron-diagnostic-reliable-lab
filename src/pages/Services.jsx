import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { PageHero } from "./About.jsx";
import { services } from "../data/site.js";

export default function Services() {
  return (
    <Layout>
      <PageHero title="Our Diagnostic Services" text="Premium testing departments for routine care, specialist investigation, preventive checkups, and community health programs." />
      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Services" title="Complete laboratory support" text="Each service includes professional sample handling, quality checks, and clear reporting for patients and clinicians." />
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft md:grid-cols-[220px_1fr]">
                <img src={service.image} alt={`${service.title} laboratory testing`} className="h-full min-h-64 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                  <p className="mt-5 font-bold text-navy">Benefits</p>
                  <ul className="mt-2 grid gap-2 text-sm text-slate-600">{service.benefits.map((item) => <li key={item}>- {item}</li>)}</ul>
                  <p className="mt-5 font-bold text-navy">Related Tests</p>
                  <div className="mt-3 flex flex-wrap gap-2">{service.tests.map((test) => <span key={test} className="rounded-full bg-skysoft px-3 py-1 text-xs font-semibold text-navy">{test}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Band>
    </Layout>
  );
}
