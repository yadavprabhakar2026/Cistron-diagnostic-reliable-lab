import { motion } from "framer-motion";
import SEO from "./SEO.jsx";

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <SEO />
      {children}
    </motion.div>
  );
}
