// component/Projects/Projects.jsx
import React from "react";
import "./projects.css";

const Projects = () => {
    const projects = [
        { id: 1, name: "Mosquito Mesh Installation", image: "/images/proj1.jpg" },
        { id: 2, name: "Balcony Safety Nets", image: "/images/proj2.jpg" },
        { id: 3, name: "Window Mesh Fittings", image: "/images/proj3.jpg" },
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-title">Our Projects</h2>
            <div className="projects-grid">
                {projects.map((proj) => (
                    <div key={proj.id} className="project-card">
                        <img src={proj.image} alt={proj.name} />
                        <h4>{proj.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
