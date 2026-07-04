import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { Band, SectionHeader } from "../components/Section.jsx";

const contentTypes = [
  "Blog Posts",
  "Gallery Images",
  "Contact Submissions",
  "Laboratory Services",
  "Homepage Banners",
  "Contact Information"
];

export default function Admin() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState(contentTypes[0]);
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  async function login(event) {
    event.preventDefault();
    setError("");
    const credentials = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      });
      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      setToken(data.token);
    } catch (err) {
      setError(err.message);
    }
  }

  function saveItem(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    if (editing) {
      setItems((current) => current.map((item) => (item.id === editing.id ? { ...item, ...values, type } : item)));
      setEditing(null);
    } else {
      setItems((current) => [{ id: crypto.randomUUID(), type, ...values }, ...current]);
    }
    event.currentTarget.reset();
  }

  if (!token) {
    return (
      <Layout>
        <Band className="bg-skysoft">
          <form onSubmit={login} className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-soft">
            <p className="eyebrow">Protected Area</p>
            <h1 className="font-heading text-3xl font-bold text-navy">Admin Login</h1>
            <input required name="email" type="email" placeholder="Admin email" className="form-input mt-6" />
            <input required name="password" type="password" placeholder="Password" className="form-input mt-4" />
            {error && <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
            <button className="btn-primary mt-5 w-full justify-center">Login</button>
          </form>
        </Band>
      </Layout>
    );
  }

  return (
    <Layout>
      <Band className="bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Admin" title="Website management dashboard" text="Manage public website content and review operational information from one protected workspace." />
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-lg border border-slate-200 bg-skysoft p-4">
              {contentTypes.map((label) => (
                <button key={label} onClick={() => setType(label)} className={`mb-2 w-full rounded-lg px-4 py-3 text-left text-sm font-bold ${type === label ? "bg-primary text-white" : "bg-white text-navy"}`}>
                  {label}
                </button>
              ))}
            </aside>
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl font-bold text-navy">Manage {type}</h2>
              <form onSubmit={saveItem} className="mt-5 grid gap-4 md:grid-cols-2">
                <input name="title" required placeholder={`${type} title`} defaultValue={editing?.title || ""} className="form-input" />
                <input name="image" placeholder="Image URL" defaultValue={editing?.image || ""} className="form-input" />
                <textarea name="body" required placeholder="Description, update, or notes" defaultValue={editing?.body || ""} rows="4" className="form-input md:col-span-2" />
                <button className="btn-primary justify-center md:w-fit">{editing ? "Update Item" : "Add Item"}</button>
              </form>
              <div className="mt-8 grid gap-4">
                {items.filter((item) => item.type === type).map((item) => (
                  <article key={item.id} className="rounded-lg border border-slate-200 p-4">
                    <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                    <div className="mt-4 flex gap-2">
                      <button className="btn-secondary" onClick={() => setEditing(item)}>Edit</button>
                      <button className="btn-secondary text-red-700" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}>Delete</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Band>
    </Layout>
  );
}
