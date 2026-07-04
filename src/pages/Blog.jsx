import { FaArrowRight, FaUserMd } from "react-icons/fa";
import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { PageHero } from "./About.jsx";
import { blogPosts, serviceImages } from "../data/site.js";

export default function Blog() {
  return (
    <Layout>
      <PageHero title="Healthcare Blog" text="Clear, practical articles on preventive healthcare, common conditions, laboratory medicine, and healthy living." />
      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Knowledge Center" title="Articles for patients and professionals" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(([category, title, summary, date], index) => (
              <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
                <img src={serviceImages[index % serviceImages.length]} alt={`${category} healthcare article`} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{category}</p>
                  <h2 className="mt-3 font-heading text-xl font-bold text-navy">{title}</h2>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500"><FaUserMd /> CDRL Medical Team | {date}</div>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">{summary}</p>
                  <button className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Read More <FaArrowRight /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Band>
    </Layout>
  );
}
