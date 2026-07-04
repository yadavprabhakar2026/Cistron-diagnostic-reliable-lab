import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lab } from "../data/site";
import { seo, structuredData } from "../data/seo";

export default function SEO() {
  const { pathname } = useLocation();
  const meta = seo[pathname] || seo["/"];
  const canonical = `${lab.url}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("keywords", "Medical Laboratory in Biratnagar, Diagnostic Laboratory Biratnagar, Blood Test Biratnagar, Reference Laboratory Nepal, Pathology Lab Biratnagar, Diagnostic Centre Nepal");
    setProperty("og:title", meta.title);
    setProperty("og:description", meta.description);
    setProperty("og:url", canonical);
    setProperty("og:type", "website");
    setLink("canonical", canonical);
    setJsonLd(structuredData());
  }, [meta.title, meta.description, canonical]);

  return null;
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setJsonLd(data) {
  let tag = document.getElementById("schema-org");
  if (!tag) {
    tag = document.createElement("script");
    tag.id = "schema-org";
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}
