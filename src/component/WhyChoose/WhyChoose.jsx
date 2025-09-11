import React from "react";
import "./whyChoose.css";

const WhyChoose = () => {
    return (
        <section className="why-choose-container">
            <h2 className="main-heading">Why Choose SF Mosquito Mesh?</h2>

            {/* Banner 1 */}
            <div className="banner-card">
                <img
                    src="Protection Image.jpg"
                    alt="Mosquito Mesh Protection"
                    className="banner-image"
                />
                <div className="banner-content">
                    <h3>🛡️ Ultimate Mosquito Protection</h3>
                    <p>
                        Say goodbye to sleepless nights! Our fine-grade stainless steel mesh
                        blocks even the tiniest mosquitoes without disrupting your ventilation.
                        Enjoy fresh air 24/7 while keeping your family safe.
                    </p>
                </div>
            </div>

            {/* Banner 2 */}
            <div className="banner-card reverse">
                <div className="banner-content">
                    <h3>🌟 Premium Quality & Durability</h3>
                    <p>
                        Built with high-tensile, rust-proof material, our mesh systems are made
                        to last. Easy to clean, corrosion-resistant, and tested to withstand
                        extreme weather — our quality speaks for itself!
                    </p>
                </div>
                <img
                    src="Quality Image.jpg"
                    alt="Mesh Quality"
                    className="banner-image"
                />
            </div>
        </section>
    );
};

export default WhyChoose;
