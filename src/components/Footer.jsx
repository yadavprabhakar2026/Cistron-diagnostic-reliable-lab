import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { lab, navItems, services, socials } from "../data/site";

export default function Footer() {
  const featuredServices = services.slice(0, 6);
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-white font-heading text-lg font-bold text-primary">C</span>
            <div>
              <p className="font-heading text-lg font-bold">{lab.shortName}</p>
              <p className="text-sm text-sky-100">Diagnostic Reliable Lab</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-sky-100">
            Premium diagnostic laboratory in Biratnagar delivering accurate, timely, and patient-centered reporting.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} aria-label={label} className="icon-button bg-white/10 text-white hover:bg-primary">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Quick Links</h2>
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <Link key={href} to={href} className="footer-link">{label}</Link>
            ))}
            <Link to="/contact#contact-form" className="footer-link font-semibold text-white">Book a Test</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Services</h2>
          <div className="grid gap-2">
            {featuredServices.map((service) => (
              <Link key={service.title} to="/services" className="footer-link">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <p className="footer-contact"><FaMapMarkerAlt /> {lab.address}</p>
          <p className="footer-contact"><FaPhoneAlt /> {lab.phones.join(" / ")}</p>
          <p className="footer-contact"><FaEnvelope /> {lab.email}</p>
          <p className="footer-contact"><FaClock /> {lab.hours}</p>
          <a className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4" href="https://maps.google.com/?q=Hospital+Chowk+Rangali+Road+Biratnagar+Nepal">Open Google Map</a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-sky-100">
        <span>Privacy Policy</span> | <span>Terms & Conditions</span> | <span>(c) 2026 {lab.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
