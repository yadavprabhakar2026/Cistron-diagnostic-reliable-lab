import {
  FaAward,
  FaClock,
  FaFlask,
  FaHeartbeat,
  FaMicroscope,
  FaShieldAlt,
  FaUserMd,
  FaVial,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

export const lab = {
  name: "Cistron Diagnostic Reliable Lab",
  shortName: "CDRL",
  url: "https://cdrlcistron.com",
  address: "Hospital Chowk, Rangali Road, Biratnagar, Nepal",
  email: "cdrlcistron@gmail.com",
  phones: ["9762511646", "98263001770"],
  hours: "Sunday to Friday, 7:00 AM - 7:00 PM"
};

export const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Mission & Vision", "/mission-vision"],
  ["Our Services", "/services"],
  ["Blog", "/blog"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export const socials = [
  { label: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" }
];

export const whyChoose = [
  ["Accurate Test Results", FaVial],
  ["Advanced Technology", FaMicroscope],
  ["Experienced Professionals", FaUserMd],
  ["Fast Turnaround Time", FaClock],
  ["Affordable Services", FaHeartbeat],
  ["Quality Assurance", FaShieldAlt],
  ["Reliable Reporting", FaAward],
  ["Excellent Patient Care", FaFlask]
];

export const serviceImages = [
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=900&q=80"
];

export const services = [
  {
    title: "Clinical Biochemistry",
    image: serviceImages[0],
    description: "Comprehensive chemistry testing for liver, kidney, lipid, electrolyte, glucose, and metabolic profiles.",
    benefits: ["High precision chemistry analysis", "Fast physician-ready reporting", "Critical value alert support"],
    tests: ["LFT", "KFT", "Lipid Profile", "Blood Glucose", "Electrolytes"]
  },
  {
    title: "Hematology",
    image: serviceImages[1],
    description: "Reliable blood cell analysis and coagulation testing to support diagnosis, treatment, and monitoring.",
    benefits: ["Automated cell counters", "Peripheral smear review", "Anemia and infection insights"],
    tests: ["CBC", "ESR", "PT/INR", "BT/CT", "Peripheral Smear"]
  },
  {
    title: "Clinical Pathology",
    image: serviceImages[2],
    description: "Routine and advanced urine, stool, and body fluid examinations with careful microscopy.",
    benefits: ["Clear microscopic findings", "Routine screening support", "Patient-friendly sample handling"],
    tests: ["Urine R/E", "Stool R/E", "Pregnancy Test", "Body Fluid Analysis"]
  },
  {
    title: "Microbiology",
    image: serviceImages[3],
    description: "Culture and sensitivity services that help clinicians choose effective antimicrobial therapy.",
    benefits: ["Sterile processing workflow", "Antibiotic sensitivity guidance", "Infection control support"],
    tests: ["Urine Culture", "Blood Culture", "Sputum Culture", "Wound Swab"]
  },
  {
    title: "Immunology",
    image: serviceImages[0],
    description: "Immune marker testing for infection, autoimmune screening, allergy, and inflammatory conditions.",
    benefits: ["Validated immunoassays", "Broad marker coverage", "Clinically useful interpretation"],
    tests: ["CRP", "RF", "ANA", "IgE", "ASO"]
  },
  {
    title: "Serology",
    image: serviceImages[1],
    description: "Rapid and reference serological tests for infectious disease screening and confirmation.",
    benefits: ["Timely infection screening", "Clear reactive/non-reactive reporting", "Quality-controlled kits"],
    tests: ["HBsAg", "HCV", "HIV", "Dengue", "Widal"]
  },
  {
    title: "Histopathology",
    image: serviceImages[2],
    description: "Tissue processing and microscopic pathology support for diagnosis and specialist care.",
    benefits: ["Careful specimen handling", "Detailed pathology workflow", "Consultant reporting support"],
    tests: ["Biopsy", "Tissue Histology", "Surgical Specimens"]
  },
  {
    title: "Cytopathology",
    image: serviceImages[3],
    description: "Cell-based diagnostic testing for screening, early detection, and follow-up care.",
    benefits: ["Early abnormality detection", "Fine needle aspiration support", "Organized report formats"],
    tests: ["Pap Smear", "FNAC", "Fluid Cytology"]
  },
  {
    title: "Molecular Diagnostics",
    image: serviceImages[0],
    description: "Advanced molecular testing workflows for high-sensitivity infectious and genetic investigations.",
    benefits: ["High analytical sensitivity", "Modern molecular protocols", "Specialist referral compatibility"],
    tests: ["PCR Panels", "Viral Load Support", "Genetic Screening"]
  },
  {
    title: "Hormone Testing",
    image: serviceImages[1],
    description: "Endocrine testing for thyroid, fertility, metabolic, and reproductive health evaluation.",
    benefits: ["Sensitive hormone assays", "Fertility workup support", "Thyroid monitoring"],
    tests: ["T3", "T4", "TSH", "FSH", "LH", "Prolactin"]
  },
  {
    title: "Tumor Markers",
    image: serviceImages[2],
    description: "Marker testing that supports screening, oncology monitoring, and specialist treatment follow-up.",
    benefits: ["Oncology monitoring support", "Accurate marker tracking", "Structured historical comparison"],
    tests: ["CEA", "AFP", "CA-125", "CA 19-9", "PSA"]
  },
  {
    title: "Vitamin Profile",
    image: serviceImages[3],
    description: "Nutritional deficiency testing for fatigue, bone health, immunity, and preventive care planning.",
    benefits: ["Deficiency-focused panels", "Preventive health guidance", "Simple patient preparation"],
    tests: ["Vitamin D", "Vitamin B12", "Folate", "Iron Studies"]
  },
  {
    title: "Health Packages",
    image: serviceImages[0],
    description: "Curated preventive checkup packages for families, professionals, seniors, and chronic care patients.",
    benefits: ["Convenient bundled tests", "Better preventive tracking", "Affordable profile pricing"],
    tests: ["Basic Health Checkup", "Executive Profile", "Senior Citizen Package"]
  },
  {
    title: "Corporate Health Checkups",
    image: serviceImages[1],
    description: "Scalable workplace screening programs for companies, schools, organizations, and community groups.",
    benefits: ["Group scheduling", "Digital reporting", "Workplace wellness insights"],
    tests: ["Employee Screening", "Annual Checkups", "Camp Testing"]
  }
];

export const blogPosts = [
  ["Diabetes", "Understanding HbA1c and Daily Glucose Control", "Learn how laboratory testing helps track diabetes risk and long-term blood sugar control.", "2026-02-18"],
  ["Hypertension", "Why Kidney and Lipid Tests Matter in High Blood Pressure", "A practical guide to routine tests that support safer hypertension management.", "2026-03-09"],
  ["Heart Health", "Preventive Lab Tests for a Healthier Heart", "From cholesterol profiles to inflammatory markers, know what your reports can reveal.", "2026-04-12"],
  ["Cancer Awareness", "Early Screening: When Tumor Markers Are Useful", "How marker tests can support monitoring while specialist advice remains essential.", "2026-05-06"],
  ["Women's Health", "Thyroid, Iron, and Vitamin Testing for Women", "Common deficiencies and hormone concerns that can affect energy, fertility, and wellness.", "2026-05-22"],
  ["Child Health", "Common Pediatric Lab Tests Parents Should Know", "A calm overview of blood, urine, and infection screening for children.", "2026-06-04"],
  ["Nutrition", "Vitamin D and B12 Deficiency Signs", "Why fatigue and weakness may need a nutritional laboratory check.", "2026-06-10"],
  ["Preventive Healthcare", "How Annual Health Packages Help Families", "Regular testing can identify risks early and guide better conversations with doctors.", "2026-06-18"],
  ["Laboratory Medicine", "What Makes a Reliable Diagnostic Report?", "A look at sample handling, instruments, quality checks, and clinical validation.", "2026-06-24"],
  ["Healthy Lifestyle", "Small Habits That Improve Your Lab Results", "Sleep, hydration, fasting, and medication timing can all affect test quality.", "2026-06-28"]
];

export const galleryCategories = ["Reception", "Sample Collection", "Laboratory", "Equipment", "Team", "Health Camps", "Community Programs", "Events"];

export const galleryImages = galleryCategories.map((category, index) => ({
  category,
  title: `${category} at CDRL`,
  src: serviceImages[index % serviceImages.length],
  alt: `${category} area of Cistron Diagnostic Reliable Lab in Biratnagar`
}));

export const testimonials = [
  "CDRL gave us clear reports on time and explained the sample process with care.",
  "The laboratory team is professional, organized, and responsive for doctor referrals.",
  "A clean facility with friendly staff and reliable diagnostic support in Biratnagar."
];
