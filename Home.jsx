
import { useEffect } from "react";
import { initTravelNest } from "../travelnestLogic.js";

export default function Home() {

  useEffect(() => {
    document.title = "TravelNest | Home";
    initTravelNest();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a className="logo" href="/">✈ TravelNest</a>

        <button className="menu-btn" id="menuBtn">
          ☰
        </button>

        <nav id="nav">
          <a className="active" href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/packages">Packages</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a className="nav-book" href="/booking">
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

          <h1>
            Discover the world,
            <br />
            <span>one trip at a time.</span>
          </h1>

          <p>
            Explore beautiful destinations, compare tour
            packages and plan your next adventure.
          </p>

          <div className="hero-actions">
            <a className="btn" href="/destinations">
              Explore Destinations
            </a>

            <a className="btn light" href="/packages">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* SEARCH BOX */}
      <section className="search-box wrap">
        <div>
          <label htmlFor="homeSearch">
            Where do you want to go?
          </label>

          <input
            id="homeSearch"
            placeholder="Search destination..."
            type="search"
          />
        </div>

        <a className="btn" href="/destinations" id="searchBtn">
          Search
        </a>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>Popular Destinations</h2>
          </div>

          <a className="text-link" href="/destinations">
            View all &rarr;
          </a>
        </div>

        <div className="card-grid">

          {/* MALDIVES */}
          <article className="destination-card">
            <img
              alt="Maldives"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
            />
            <div>
              <h3>Maldives</h3>
              <p>Beach &bull; Island</p>
              <a href="/booking?destination=Maldives">
                Explore trip &rarr;
              </a>
            </div>
          </article>

          {/* KYOTO */}
          <article className="destination-card">
            <img
              alt="Kyoto"
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80"
            />
            <div>
              <h3>Kyoto</h3>
              <p>Japan &bull; Culture</p>
              <a href="/booking?destination=Kyoto">
                Explore trip &rarr;
              </a>
            </div>
          </article>

          {/* SWISS ALPS */}
          <article className="destination-card">
            <img
              alt="Swiss Alps"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
            />
            <div>
              <h3>Swiss Alps</h3>
              <p>Switzerland &bull; Mountain</p>
              <a href="/booking?destination=Swiss%20Alps">
                Explore trip &rarr;
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="section alt">
        <div className="wrap">

          <div className="section-head">
            <div>
              <p className="eyebrow">HANDPICKED</p>
              <h2>Featured Packages</h2>
            </div>

            <a className="text-link" href="/packages">
              See packages &rarr;
            </a>
          </div>

          <div className="package-grid">

            {/* MALDIVES PACKAGE */}
            <article className="package-card">
              <img
                alt="Maldives"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
              />

              <div className="package-body">
                <span className="tag">Beach</span>
                <h3>Maldives Escape</h3>
                <p>5 Days / 4 Nights</p>

                <strong>
                  $699 <small>/ person</small>
                </strong>

                <a
                  className="btn small"
                  href="/booking?destination=Maldives"
                >
                  Book now
                </a>
              </div>
            </article>

            {/* JAPAN PACKAGE */}
            <article className="package-card">
              <img
                alt="Japan"
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
              />

              <div className="package-body">
                <span className="tag">Culture</span>
                <h3>Japan Discovery</h3>
                <p>7 Days / 6 Nights</p>

                <strong>
                  $1,199 <small>/ person</small>
                </strong>

                <a
                  className="btn small"
                  href="/booking?destination=Kyoto"
                >
                  Book now
                </a>
              </div>
            </article>

            {/* SWISS PACKAGE */}
            <article className="package-card">
              <img
                alt="Switzerland"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
              />

              <div className="package-body">
                <span className="tag">Adventure</span>
                <h3>Swiss Adventure</h3>
                <p>6 Days / 5 Nights</p>

                <strong>
                  $1,399 <small>/ person</small>
                </strong>

                <a
                  className="btn small"
                  href="/booking?destination=Swiss%20Alps"
                >
                  Book now
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta wrap">
        <div>
          <p className="eyebrow">READY TO TRAVEL?</p>
          <h2>Make your next journey unforgettable.</h2>
        </div>

        <a className="btn" href="/booking">
          Plan My Trip
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footer-grid">

          <div>
            <a className="logo">✈ TravelNest</a>
            <p>Travel smarter. Explore farther.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="/destinations">Destinations</a>
            <a href="/packages">Packages</a>
            <a href="/about">About</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hello@travelnest.com</p>
            <p>+880 1700-000000</p>
          </div>

        </div>

        <div className="copyright">
          &copy; 2026 TravelNest. Educational project.
        </div>
      </footer>

    </>
  );
}
