import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingButtons.css"; // Make sure you have this CSS

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919121471387"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+919121471387"
        className="call-float"
        aria-label="Call Now"
      >
        <i className="fas fa-phone call-icon" />
      </a>
    </>
  );
};

export default FloatingButtons;
