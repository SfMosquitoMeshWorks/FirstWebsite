import React from "react";
import "./ourServices.css";

const serviceData = [
    {
        title: "Window Mesh",
        image: "pngImges/RollingMesh.jpeg",
        description: "Protect your interiors with durable mosquito window mesh."
    },

    {
        title: "Invisible Grill",
        image: "pngImges/InvisibleGrill.jpeg",
        description: "Aesthetic color-coated mesh matching your decor."
    },
    {
        title: "Sliding Mesh",
        image: "pngImges/SlidingMesh.jpeg",
        description: "Sleek sliding mesh doors for modern interiors."
    },
    {
        title: "Pleated Mesh",
        image: "pngImges/SS-mesh.jpeg",
        description: "Stylish pleated mesh that folds neatly when not in use."
    },
    {
        title: "Roller Mesh",
        image: "pngImges/RollingMesh.jpeg",
        description: "Roll-up mesh systems for ease of access and space saving."
    },
    {
        title: "Magnetic Mesh",
        image: "img6.jpeg",
        description: "Quick-open magnetic mesh ideal for high-traffic areas."
    },
    {
        title: "Aluminum Frame Mesh",
        image: "img8.jpeg",
        description: "Sturdy aluminum frames for lasting protection."
    },
    {
        title: "Velcro Mesh",
        image: "img8.jpeg",
        description: "Economical and flexible mesh with velcro fitting."
    },
    {
        title: "SS Mesh",
        image: "img9.jpeg",
        description: "High-grade stainless steel mesh for premium protection."
    },
    {
        title: "Door Mesh",
        image: "pngImges/GrillMeshDoor.jpeg",
        description: "Keep your home ventilated and bug-free with mesh doors."
    },
    {
        title: "Invisible Grill",
        image: "pngImges/InvisibleGrill.jpeg",
        description: "Keep your home safe and stylish with Invisible Grills.Strong protection against pests without blocking your view.Durable, rust- free, and child - safe solution for modern homes.."
    }
];

const OurServices = () => {
    return (
        <div className="services-container">
            {/* Carousel Section */}
            <div className="carousel-section">
                <img src="ourServices.png" alt="Mosquito Mesh Service" className="carousel-image" />
                <div className="carousel-overlay">

                    <h2 className="carousel-heading">SF Mosquito Mesh Services</h2>
                    <marquee className="carousel-marquee" behavior="scroll" direction="left">
                        Experience the best in mosquito mesh solutions with SF Mosquito Mesh. Our services are designed to provide you with
                        top-notch protection against insects while ensuring maximum airflow and durability.
                    </marquee>
                </div>
            </div>

            {/* Service Items */}
            <div className="banner-wrapper">
                {serviceData.map((service, index) => (
                    <div
                        className={`service-banner ${index % 2 !== 0 ? "reverse" : ""}`}
                        key={index}
                    >
                        <img src={service.image} alt={service.title} />
                        <div className="text">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
