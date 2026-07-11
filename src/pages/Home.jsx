import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarCheck, FaQuoteLeft } from "react-icons/fa";
import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { services, testimonials, whyChoose } from "../data/site.js";

const heroImage = "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1800&q=82";

export default function Home() {
  return (
    <Layout>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy text-white">
        <img src={heroImage} alt="Modern laboratory interior with diagnostic scientists and analyzers" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-primary/40" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-sky-100 ring-1 ring-white/20">
              Medical Diagnostic Reference Laboratory in Biratnagar
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Precision Diagnostics. Trusted Results. Better Healthcare.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50">
              Welcome to Cistron Diagnostic Reliable Lab, a trusted medical reference laboratory in Biratnagar providing accurate, timely, and reliable diagnostic services using advanced laboratory technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact#contact-form" className="btn-primary text-base"><FaCalendarCheck /> Book a Test</Link>
              <Link to="/contact" className="btn-secondary bg-white/12 text-white ring-white/30 hover:bg-white/20">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Reliable diagnostics shaped around patient trust" text="Every step, from sample collection to report delivery, is designed for accuracy, safety, and clarity." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([title, Icon], index) => (
              <motion.article key={title} className="feature-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <Icon className="text-3xl text-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Quality-controlled workflows with attentive support for patients and clinicians.</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Band>

      <Band className="bg-skysoft">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Services" title="Core laboratory services" text="Specialized diagnostic departments for daily healthcare needs and advanced clinical decisions." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServicePreview key={service.title} service={service} />)}
          </div>
        </div>
      </Band>

      <Band className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["8+", "Years of Experience"],
            ["250K+", "Tests Performed"],
            ["80K+", "Satisfied Patients"],
            ["300+", "Doctors Served"]
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-white">{value}</p>
              <p className="mt-2 text-sky-100">{label}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="Trusted by families and healthcare professionals" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((quote) => (
              <article key={quote} className="feature-card">
                <FaQuoteLeft className="text-2xl text-primary" />
                <p className="mt-4 leading-7 text-slate-700">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </Band>

      <Band className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-100">Need a Laboratory Test?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold">Book your test today with our expert team.</h2>
          </div>
          <Link to="/contact#contact-form" className="btn-secondary bg-white text-primary hover:bg-skysoft">
            Book a Test <FaArrowRight />
          </Link>
        </div>
      </Band>
    </Layout>
  );
}

function ServicePreview({ service }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-soft">
      <img src={service.image} alt={`${service.title} diagnostic service at CDRL`} className="h-52 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-navy">{service.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{service.description}</p>
        <Link to="/services" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
          Learn More <FaArrowRight />
        </Link>
      </div>
    </article>
  );
}
