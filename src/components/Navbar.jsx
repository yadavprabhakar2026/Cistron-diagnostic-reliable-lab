import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "text-primary" : "text-navy/80 hover:text-primary"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Cistron Diagnostic Reliable Lab home">
          <img
            src="/Logo 3.png"
            alt="Cistron Diagnostic Reliable Lab logo"
            className="h-14 w-auto max-w-[190px] object-contain"
          />
        </Link>

        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-2 border-b border-slate-200 bg-white px-4 py-4 shadow-soft lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          {navItems.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={() => setOpen(false)} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact#contact-form" onClick={() => setOpen(false)} className="btn-primary justify-center">
            Book a Test
          </Link>
        </div>
      </nav>
    </header>
  );
}
