export function SectionHeader({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

export function Band({ children, className = "" }) {
  return <section className={`px-4 py-16 sm:py-20 lg:px-8 ${className}`}>{children}</section>;
}
