import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";
import { PageHero } from "./About.jsx";
import { galleryCategories, galleryImages } from "../data/site.js";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((image) => image.category === filter);

  return (
    <Layout>
      <PageHero title="Gallery" text="A look inside our reception, sample collection, laboratory, equipment, team activities, and community health programs." />
      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Images" title="CDRL spaces and activities" />
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["All", ...galleryCategories].map((category) => (
              <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm font-semibold ${filter === category ? "bg-primary text-white" : "bg-skysoft text-navy hover:bg-blue-100"}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((image) => (
              <button key={image.category} onClick={() => setActive(image)} className="group overflow-hidden rounded-lg text-left shadow-soft">
                <img src={image.src} alt={image.alt} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                <span className="block bg-white p-4 font-semibold text-navy">{image.title}</span>
              </button>
            ))}
          </div>
        </div>
      </Band>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-navy/90 p-4" role="dialog" aria-modal="true">
          <button onClick={() => setActive(null)} className="absolute right-5 top-5 icon-button bg-white text-navy" aria-label="Close preview"><FaTimes /></button>
          <img src={active.src} alt={active.alt} className="max-h-[82vh] w-full max-w-5xl rounded-lg object-contain" />
        </div>
      )}
    </Layout>
  );
}
