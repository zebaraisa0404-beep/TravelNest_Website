
import { useEffect, useState } from "react";
import { initTravelNest } from "../travelnestLogic.js";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = "TravelNest | Contact";
    initTravelNest();
  }, []);

  function handleContact(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus(
      "✓ Thank you! Your message has been sent. (Demo only)"
    );

    form.reset();
  }

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a href="/" className="logo">
          ✈ TravelNest
        </a>

        <button className="menu-btn" id="menuBtn">
          ☰
        </button>

        <nav id="nav">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/packages">Packages</a>
          <a href="/about">About</a>
          <a className="active" href="/contact">Contact</a>
          <a className="nav-book" href="/booking">
            Book Now
          </a>
        </nav>
      </header>

      {/* CONTACT PAGE HEADING */}
      <section className="page-hero">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>Let's plan your journey</h1>

        <p>Have a question? Send us a message.</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section wrap contact-grid">

        {/* LEFT SIDE - CONTACT INFORMATION */}
        <div className="contact-info">
          <h2>Contact information</h2>

          <p>
            Ask us about destinations, packages and booking.
          </p>

          <div>
            <strong>📧 Email</strong>
            <p>hello@travelnest.com</p>
          </div>

          <div>
            <strong>📞 Phone</strong>
            <p>+880 1700-000000</p>
          </div>

          <div>
            <strong>📍 Office</strong>
            <p>Khulna, Bangladesh</p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          className="form-card"
          id="contactForm"
          noValidate
          onSubmit={handleContact}
        >
          <h2>Send a message</h2>

          <label>
            Name
            <input
              id="contactName"
              name="name"
              type="text"
              required
            />
          </label>

          <label>
            Email
            <input
              id="contactEmail"
              name="email"
              type="email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              id="contactMessage"
              name="message"
              rows="5"
              minLength={10}
              required
            />
          </label>

          <button className="btn" type="submit">
            Send Message
          </button>

          <p
            className="form-status"
            id="contactStatus"
            role="status"
          >
            {status}
          </p>
        </form>
      </section>

      {/* ORIGINAL FOOTER */}
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <a href="/" className="logo">
              ✈ TravelNest
            </a>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="/destinations">Destinations</a>
            <a href="/packages">Packages</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hello@travelnest.com</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 TravelNest.
        </div>
      </footer>
    </>
  );
}
