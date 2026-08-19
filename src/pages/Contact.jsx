import React from "react";

function Contact() {
  return (
    <>
      <style>
        {`
          .contact-page {
            font-family: Arial, sans-serif;
            color: #333;
          }

          .contact-hero {
            background: #f3e8d0;
            text-align: center;
            padding: 60px 20px;
          }

          .contact-hero h1 {
            font-size: 42px;
            margin-bottom: 15px;
          }

          .contact-hero p {
            font-size: 18px;
          }

          .contact-container {
            display: flex;
            gap: 40px;
            padding: 60px 8%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .contact-form,
          .contact-info {
            width: 420px;
            padding: 30px;
            border-radius: 10px;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          }

          .contact-form h2,
          .contact-info h2 {
            color: #6b4f2a;
            margin-bottom: 20px;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
          }

          .contact-form textarea {
            height: 120px;
            resize: none;
          }

          .contact-form button {
            background: #6b4f2a;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }

          .contact-form button:hover {
            background: #4f381d;
          }

          .contact-info p {
            line-height: 1.8;
            margin-bottom: 12px;
          }

          .map-section {
            padding: 0 8% 60px;
            text-align: center;
          }

          .map-section h2 {
            color: #6b4f2a;
            margin-bottom: 20px;
          }

          .map-box {
            width: 100%;
            height: 300px;
            border-radius: 10px;
            overflow: hidden;
          }

          .map-box iframe {
            width: 100%;
            height: 100%;
            border: 0;
          }
        `}
      </style>

      <div className="contact-page">

        {/* Hero */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Reach out to our ministry team.
          </p>
        </section>

        {/* Contact Details */}
        <section className="contact-container">

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form>
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Ministry Details */}
          <div className="contact-info">
            <h2>Ministry Details</h2>

            <p>
              <strong>Address:</strong><br />
              123 Ministry Street,<br />
              Kurnool, Andhra Pradesh
            </p>

            <p>
              <strong>Phone:</strong><br />
              +91 98765 43210
            </p>

            <p>
              <strong>Email:</strong><br />
              ministry@example.com
            </p>

            <p>
              <strong>Office Hours:</strong><br />
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
          </div>

        </section>

        {/* Google Map */}
        <section className="map-section">
          <h2>Find Us</h2>

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps?q=Kurnool,Andhra Pradesh&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ministry Location"
            ></iframe>
          </div>
        </section>

      </div>
    </>
  );
}

export default Contact;