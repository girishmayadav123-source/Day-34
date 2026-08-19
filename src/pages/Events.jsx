import React from "react";
import "./Events.css";

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "August 23, 2026",
    time: "9:00 AM - 11:00 AM",
    location: "Main Church Hall",
    description:
      "Join us for a meaningful worship service filled with prayer, guidance, praise, and fellowship.",
    category: "Worship",
  },
  {
    id: 2,
    title: "Community Outreach Program",
    date: "August 29, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Community Center",
    description:
      "Come together to serve our local community through food distribution, support, and care.",
    category: "Outreach",
  },
  {
    id: 3,
    title: "Youth Fellowship",
    date: "September 5, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Youth Hall",
    description:
      "An inspiring gathering for young people featuring fellowship, discussions, activities, and spiritual guidance.",
    category: "Youth",
  },
  {
    id: 4,
    title: "Prayer & Guidance Meeting",
    date: "September 12, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Prayer Hall",
    description:
      "A peaceful evening of prayer, reflection, and spiritual guidance for individuals and families.",
    category: "Prayer",
  },
  {
    id: 5,
    title: "Family Fellowship Day",
    date: "September 20, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Church Grounds",
    description:
      "A special day for families to connect, share, enjoy activities, and strengthen our community bonds.",
    category: "Community",
  },
  {
    id: 6,
    title: "Food & Care Ministry",
    date: "September 27, 2026",
    time: "9:30 AM - 12:30 PM",
    location: "Community Kitchen",
    description:
      "Help us provide meals and essential support to families and individuals in need.",
    category: "Ministry",
  },
];

const Events = () => {
  return (
    <div className="events-page">

      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-content">
          <span>FAITH • GUIDANCE • COMMUNITY</span>
          <h1>Upcoming Events</h1>
          <p>
            Discover upcoming ministry services, community gatherings,
            outreach programs, and opportunities to grow together in faith.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="events-intro">
        <h2>Join Us in Faith & Community</h2>
        <p>
          Our events are designed to bring people together through worship,
          prayer, fellowship, service, and community outreach. Everyone is
          welcome to participate.
        </p>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="events-container">

          {events.map((event) => (
            <div className="event-card" key={event.id}>

              <div className="event-date">
                <span className="calendar-icon">📅</span>
                <p>{event.date}</p>
              </div>

              <div className="event-content">

                <span className="event-category">
                  {event.category}
                </span>

                <h3>{event.title}</h3>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-details">
                  <span>🕒 {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>

                <button className="event-btn">
                  Learn More
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="events-cta">
        <h2>Be Part of Our Community</h2>
        <p>
          Whether you are looking for worship, guidance, fellowship, or a way
          to serve others, there is a place for you here.
        </p>

        <button className="cta-btn">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Events;