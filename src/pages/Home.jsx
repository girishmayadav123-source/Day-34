import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-hero" id="visit">
        <div className="hero-copy">
          <p className="eyebrow">A place to belong</p>
          <h1>
            Faith for today.
            <br />
            <em>Hope for tomorrow.</em>
          </h1>
          <p className="hero-text">
            SmartLogix Ministry is a welcoming home where faith is strengthened,
            questions are heard, and neighbors grow together.
          </p>
          <div className="hero-links">
            <a className="button button-primary" href="#gather">
              Join us Sunday
            </a>
            <Link className="text-link" to="/services">
              Explore our services →
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span>✦</span>
          <div className="sun" />
          <div className="hills" />
        </div>
      </section>
      <section className="welcome-section" id="gather">
        <div>
          <p className="eyebrow">You are welcome here</p>
          <h2>Growing in grace, together.</h2>
        </div>
        <p>
          Whether you are exploring faith or looking for a church family, there
          is a seat for you. Come as you are and find practical guidance for
          everyday life.
        </p>
      </section>
      <section className="gatherings">
        <article>
          <span className="card-icon">☀</span>
          <h3>Sunday Worship</h3>
          <p>10:00 AM · In person & online</p>
          <a href="#visit">Plan your visit</a>
        </article>
        <article>
          <span className="card-icon">♡</span>
          <h3>Community Groups</h3>
          <p>Find friendship, prayer, and encouragement throughout the week.</p>
          <Link to="/services">Find a group</Link>
        </article>
        <article>
          <span className="card-icon">⌂</span>
          <h3>Local Outreach</h3>
          <p>Serving our neighbors with compassion and practical care.</p>
          <Link to="/services">Get involved</Link>
        </article>
      </section>
    </>
  );
}