import { lab } from "./site";

export const seo = {
  "/": {
    title: "Cistron Diagnostic Reliable Lab | Medical Laboratory in Biratnagar",
    description: "Trusted diagnostic laboratory in Biratnagar offering accurate blood tests, pathology, microbiology, immunology, and preventive health packages."
  },
  "/about": {
    title: "About CDRL | Reference Laboratory Nepal",
    description: "Learn about Cistron Diagnostic Reliable Lab, its advanced technology, experienced professionals, quality assurance, and patient-centered care."
  },
  "/mission-vision": {
    title: "Mission and Vision | Cistron Diagnostic Reliable Lab",
    description: "Our mission is accurate diagnosis, reliable reporting, affordable healthcare, patient safety, and scientific excellence in Nepal."
  },
  "/services": {
    title: "Diagnostic Services | Blood Test Biratnagar",
    description: "Explore clinical biochemistry, hematology, pathology, microbiology, immunology, tumor markers, hormone testing, and health packages."
  },
  "/blog": {
    title: "Healthcare Blog | Laboratory Medicine and Preventive Health",
    description: "Helpful healthcare articles on diabetes, hypertension, cancer awareness, nutrition, women's health, child health, and lab testing."
  },
  "/gallery": {
    title: "Gallery | CDRL Laboratory, Equipment and Team",
    description: "View Cistron Diagnostic Reliable Lab reception, sample collection, laboratory equipment, team, health camps, and community programs."
  },
  "/contact": {
    title: "Contact CDRL | Diagnostic Centre Nepal",
    description: "Book a test or contact Cistron Diagnostic Reliable Lab at Hospital Chowk, Rangali Road, Biratnagar, Nepal."
  },
  "/admin": {
    title: "Admin Dashboard | CDRL",
    description: "Protected administrative dashboard for Cistron Diagnostic Reliable Lab website management."
  }
};

export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: lab.name,
    url: lab.url,
    email: lab.email,
    telephone: lab.phones.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hospital Chowk, Rangali Road",
      addressLocality: "Biratnagar",
      addressCountry: "NP"
    },
    medicalSpecialty: ["Pathology", "Clinical Laboratory", "Diagnostic Testing"],
    openingHours: "Su-Fr 07:00-19:00"
  };
}
