import "./Services.css";
const services = [
  [
    "Sunday Worship",
    "A joyful, accessible gathering with music, prayer, and a message rooted in scripture.",
    "Sundays · 10:00 AM",
  ],
  [
    "Pastoral Counseling",
    "Confidential, faith-centered support for life transitions, relationships, grief, and spiritual questions.",
    "By appointment",
  ],
  [
    "Community Outreach",
    "Practical care for our neighbors through food support, visits, school partnerships, and service days.",
    "Weekly opportunities",
  ],
];
export default function Services() {
  return (
    <>
      <section className="services-hero">
        <p className="eyebrow">How we walk with you</p>
        <h1>
          Care for every
          <br />
          <em>season of life.</em>
        </h1>
        <p>
          Wherever you are on your journey, our ministry is here with worship,
          guidance, and a community ready to help.
        </p>
      </section>
      <section className="service-list" aria-label="Ministry services">
        {services.map(([title, description, time], index) => (
          <article key={title}>
            <span className="service-number">0{index + 1}</span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="service-time">{time}</span>
            </div>
            <a href="mailto:hello@smartlogix.org?subject=Ministry%20services">
              Learn more <span>→</span>
            </a>
          </article>
        ))}
      </section>
      <section className="services-cta">
        <p className="eyebrow">Let's connect</p>
        <h2>Need someone to talk to?</h2>
        <p>
          Our team would be honored to listen and help you find the right next
          step.
        </p>
        <a href="mailto:hello@smartlogix.org">Contact the care team</a>
      </section>
    </>
  );
}