import React from "react";

function Community() {
  return (
    <>
      <style>
        {`
          .community-page {
            font-family: Arial, sans-serif;
            color: #333;
          }

          .community-hero {
            background: #f3e8d0;
            text-align: center;
            padding: 70px 20px;
          }

          .community-hero h1 {
            font-size: 42px;
            margin-bottom: 15px;
          }

          .community-hero p {
            font-size: 18px;
          }

          .community-section {
            padding: 50px 8%;
            text-align: center;
          }

          .community-section h2,
          .outreach-section h2 {
            font-size: 30px;
            margin-bottom: 15px;
          }

          .community-section > p {
            max-width: 700px;
            margin: auto;
            line-height: 1.6;
          }

          .community-cards {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-top: 35px;
            flex-wrap: wrap;
          }

          .community-card {
            width: 280px;
            padding: 25px;
            border-radius: 10px;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          }

          .community-card h3 {
            margin-bottom: 12px;
            color: #6b4f2a;
          }

          .community-card p {
            line-height: 1.6;
          }

          .outreach-section {
            background: #6b4f2a;
            color: white;
            text-align: center;
            padding: 55px 20px;
          }

          .outreach-section p {
            max-width: 700px;
            margin: 0 auto 25px;
            line-height: 1.6;
          }

          .outreach-section button {
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }

          .outreach-section button:hover {
            background: #ddd;
          }
        `}
      </style>

      <div className="community-page">

        <section className="community-hero">
          <h1>Our Community</h1>
          <p>
            Building a strong community through faith, fellowship, and service.
          </p>
        </section>

        <section className="community-section">
          <h2>Community Groups</h2>

          <p>
            Join our community groups to connect with others, share
            experiences, and grow together in faith.
          </p>

          <div className="community-cards">

            <div className="community-card">
              <h3>Youth Group</h3>
              <p>
                Programs and activities designed to support and inspire young
                people.
              </p>
            </div>

            <div className="community-card">
              <h3>Family Group</h3>
              <p>
                Family activities and gatherings that encourage love,
                fellowship, and togetherness.
              </p>
            </div>

            <div className="community-card">
              <h3>Volunteer Team</h3>
              <p>
                Get involved in helping others through community service and
                outreach activities.
              </p>
            </div>

          </div>
        </section>

        <section className="outreach-section">
          <h2>Community Outreach</h2>

          <p>
            Our ministry works to support people in need through outreach,
            volunteering, and community initiatives.
          </p>

          <button>Join Our Community</button>
        </section>

      </div>
    </>
  );
}

export default Community;