// component/Gallery/Gallery.jsx
import React from "react";
import "./gallery.css";

const Gallery = () => {
    // Example image data grouped by date
    const galleryData = [
        {
            date: "2025-08-30",
            images: [
                "/images/gallery1.jpg",
                "/images/gallery2.jpg",
                "/images/gallery3.jpg",
            ],
        },
        {
            date: "2025-08-28",
            images: [
                "/images/gallery4.jpg",
                "/images/gallery5.jpg",
            ],
        },
        {
            date: "2025-08-25",
            images: [
                "/images/gallery6.jpg",
                "/images/gallery7.jpg",
                "/images/gallery8.jpg",
            ],
        },
    ];

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Gallery</h2>

            {galleryData.map((section, index) => (
                <div key={index} className="gallery-section">
                    {/* Date */}
                    <h3 className="gallery-date">
                        {new Date(section.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </h3>

                    {/* Images Grid */}
                    <div className="gallery-grid">
                        {section.images.map((img, i) => (
                            <div key={i} className="gallery-item">
                                <img src={img} alt={`Gallery ${i}`} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
