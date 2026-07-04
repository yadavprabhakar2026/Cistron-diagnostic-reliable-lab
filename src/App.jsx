import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingBookButton from "./components/FloatingBookButton.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
}
