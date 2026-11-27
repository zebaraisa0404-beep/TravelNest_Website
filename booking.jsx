
import { useEffect, useState } from "react";
import { initTravelNest } from "../travelnestLogic.js";

export default function Booking() {

  const selectedDestination =
    new URLSearchParams(window.location.search)
      .get("destination") || "";

  const [destination, setDestination] =
    useState(selectedDestination);

  const [status, setStatus] = useState("");

  // Same date logic as original website
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    document.title = "TravelNest | Booking";
    initTravelNest();
  }, []);

  // Booking form validation
  function handleBooking(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();

      setStatus(
        "Please complete all required fields correctly."
      );
      return;
    }

    const date =
      document.getElementById("travelDate").value;

    if (new Date(date) < new Date(today)) {
      setStatus("Travel date cannot be in the past.");
      return;
    }

    const phone =
      document.getElementById("phone").value.trim();

    const phonePattern = /^\+?[0-9\s-]{10,15}$/;

    if (!phonePattern.test(phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setStatus(
      "✓ Booking request submitted successfully! (Demo only)"
    );

    form.reset();
    setDestination("");
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

          <a href="/destinations">
            Destinations
          </a>

          <a href="/packages">
            Packages
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

          <a
            className="nav-book active"
            href="/booking"
          >
            Book Now
          </a>
        </nav>
      </header>


      {/* BOOKING PAGE HEADING */}
      <section className="page-hero">

        <p className="eyebrow">
          BOOK YOUR TRIP
        </p>

        <h1>
          Tell us about your journey
        </h1>

        <p>
          Submit the form and prepare for your next adventure.
        </p>

      </section>


      {/* BOOKING SECTION */}
      <section className="section wrap booking-layout">

        {/* LEFT SIDE INFORMATION */}
        <div className="booking-copy">

          <h2>
            Your adventure is waiting.
          </h2>

          <p>
            This is a frontend demo. The form validates
            your information but does not process real payments.
          </p>

          <ul>
            <li>✓ Destination selection</li>
            <li>✓ Travel date validation</li>
            <li>✓ Traveler count</li>
            <li>✓ Email and phone validation</li>
          </ul>

        </div>


        {/* RIGHT SIDE BOOKING FORM */}
        <form
          className="form-card"
          id="bookingForm"
          noValidate
          onSubmit={handleBooking}
        >

          <h2>Booking Request</h2>


          {/* FULL NAME AND EMAIL */}
          <div className="two-col">

            <label>
              Full Name

              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                minLength={3}
                placeholder="Your name"
              />
            </label>

            <label>
              Email

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>

          </div>


          {/* DESTINATION AND DATE */}
          <div className="two-col">

            <label>
              Destination

              <select
                id="destination"
                name="destination"
                required
                value={destination}
                onChange={(event) =>
                  setDestination(event.target.value)
                }
              >

                <option value="">
                  Choose destination
                </option>

                <option value="Maldives">
                  Maldives
                </option>

                <option value="Swiss Alps">
                  Swiss Alps
                </option>

                <option value="Kyoto">
                  Kyoto
                </option>

                <option value="Istanbul">
                  Istanbul
                </option>

                <option value="Bali">
                  Bali
                </option>

                <option value="Nepal">
                  Nepal
                </option>

                <option value="Amalfi Coast">
                  Amalfi Coast
                </option>

              </select>
            </label>


            <label>
              Travel Date

              <input
                id="travelDate"
                name="travelDate"
                type="date"
                min={today}
                required
              />
            </label>

          </div>


          {/* TRAVELERS AND PHONE */}
          <div className="two-col">

            <label>
              Travelers

              <input
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                max="20"
                defaultValue="1"
                required
              />
            </label>


            <label>
              Phone

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+880 1XXXXXXXXX"
              />
            </label>

          </div>


          {/* SPECIAL REQUEST */}
          <label>
            Special Request

            <textarea
              id="request"
              name="request"
              rows="4"
              placeholder="Optional"
            />
          </label>


          {/* SUBMIT BUTTON */}
          <button
            className="btn"
            type="submit"
          >
            Submit Booking Request
          </button>


          {/* SUCCESS OR ERROR MESSAGE */}
          <p
            className="form-status"
            id="bookingStatus"
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
            <a className="logo" href="/">
              ✈ TravelNest
            </a>
          </div>

          <div>
            <h4>Quick Links</h4>

            <a href="/destinations">
              Destinations
            </a>

            <a href="/packages">
              Packages
            </a>
          </div>

          <div>
            <h4>Contact</h4>

            <p>
              hello@travelnest.com
            </p>
          </div>

        </div>

        <div className="copyright">
          © 2026 TravelNest.
        </div>

      </footer>

    </>
  );
}
