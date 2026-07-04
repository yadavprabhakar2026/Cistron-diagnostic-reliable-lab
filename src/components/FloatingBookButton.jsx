import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

export default function FloatingBookButton() {
  return (
    <Link to="/contact#contact-form" className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-soft sm:hidden">
      <FaCalendarCheck /> Book a Test
    </Link>
  );
}
