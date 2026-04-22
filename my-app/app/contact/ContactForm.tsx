"use client";
import { useState } from "react";

const serviceTags = [
  "Modular Buildings", "Logistic Bases", "Camps", "Housing Complexes",
  "Permanent Structures", "Relocatable Structures", "Partnership Proposal",
  "News / Media", "Other Services",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    const newErrors: { name?: boolean; email?: boolean } = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setShowSuccess(true);
    setName(""); setEmail(""); setPhone(""); setOrg(""); setMessage("");
    setActiveTags([]);
  };

  return (
    <div className="form-col">
      <p className="form-heading">Send a Message</p>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text" id="name" placeholder="John Smith"
            value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: false })); }}
            style={errors.name ? { borderColor: "#e05050" } : undefined}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email" id="email" placeholder="john@company.com"
            value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: false })); }}
            style={errors.email ? { borderColor: "#e05050" } : undefined}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="+1 (555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="org">Organization</label>
          <input type="text" id="org" placeholder="Your Company Name" value={org} onChange={(e) => setOrg(e.target.value)} />
        </div>
        <div className="form-group full">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell us about your project…" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <div className="services-group">
          <span className="services-label-contact">Area of Interest</span>
          <div className="services-grid-contact">
            {serviceTags.map((tag) => (
              <div
                key={tag}
                className={`service-tag ${activeTags.includes(tag) ? "active" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="submit-row">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit <span className="arrow">→</span>
          </button>
          <p className="submit-note">We typically respond<br />within one business day.</p>
        </div>

        <div className={`success-msg ${showSuccess ? "show" : ""}`}>
          ✓ &nbsp; Message received — we&apos;ll be in touch shortly.
        </div>
      </div>
    </div>
  );
}
