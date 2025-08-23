import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">

      {/* ===== Contact Banner ===== */}
      <section className="contact-banner">
        <h2>#Lets_Talk</h2>
        <marquee>
          Your voice matters to us! Reach out with your questions, feedback, or even just to say hi.
        </marquee>
      </section>

      {/* ===== Team Section ===== */}
      <div className="team-section">
        {[
          {
            name: "Shiva G",
            role: "Head of Department",
            email: "shiva@example.com",
            phone: "+91 9121471387",
            img: "director.jpg"
          },
          {
            name: "Harsha Kalyan",
            role: "Chief Executive Officer",
            email: "harsha@example.com",
            phone: "+91 9121471387",
            img: "CEO.jpg"
          }
        ].map((person, i) => (
          <div className="profile-card" key={i}>
            <img src={person.img} alt={person.name} />
            <div className="profile-info">
              <h2>{person.name}</h2>
              <p>{person.role}</p>
              <p>Email: {person.email}</p>
              <p>Phone: {person.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Why Connect Section ===== */}
      <div className="about-section">
        <div className="about-text">
          <h3>Why Connect With Us?</h3>
          <ul>
            <li>Prompt support</li>
            <li>Experienced team</li>
            <li>24/7 availability</li>
            <li>Trusted by top brands</li>
            <li>Professional service</li>
            <li>Timely delivery</li>
          </ul>
          <p className="contact-address">
            <strong>Address:</strong> Hno 7-59/b, Subhash Nagar, Pipeline Road, Jedimettla
          </p>
        </div>
        <div className="about-img">
          <img src="ContactUs-Banner.jpg" alt="Contact Banner" />
        </div>
      </div>

    </div>
  );
};

export default Contact;
