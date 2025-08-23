import React from 'react';
import './CallButton.css'; // optional if separating styles

const CallButton = () => {
    return (
        <a
            href="tel:+919876543210" // Replace with your number
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                backgroundColor: '#25D366', // WhatsApp green
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s ease',
            }}
        >
            <i
                className="fas fa-phone"
                style={{ marginRight: '10px', fontSize: '18px' }}
            ></i>
            Call Now
        </a>
    );
};

export default CallButton;
