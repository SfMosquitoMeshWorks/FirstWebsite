import React from "react";
import "./about.css";

const AboutPage = () => {
    return (
        <>


            <section id="page-header" className="about-header">
                <h2>#Know Us</h2>
            </section>


            <section id="about-head" className="section-p1">
                <img src="About-Us.jpg" alt="not working" />
                <div>
                    <h2>Why Use Mosquito Mesh?</h2>
                    <p>
                        Mosquito mesh is an essential barrier that protects your home from mosquitoes, insects, and dust — all while allowing fresh air to circulate.
                        It is easy to install on windows, doors, balconies, and ventilators. No chemicals, no sprays — just natural protection 24/7.
                    </p>

                    <abbr title="Mesh can be customized for windows, doors, balconies, and kitchen vents.">
                        Simply fix the mesh on your windows or doors and enjoy mosquito-free living without compromising on airflow or visibility.
                    </abbr>

                    <br /><br />

                    <marquee bgcolor="#ccc" loop="-1" scrollAmount="5" width="100%">
                        Stay protected 24/7 — Install mosquito mesh once and enjoy chemical-free, eco-friendly, breathable protection for years.
                    </marquee>
                </div>

            </section>


            <section id="feature" className="section-p1">
                {[
                    // { img: "pngImges/img_2.jpg", title: "Free Shipping" },
                    { img: "pngImges/img_3.jpg", title: "Online Order" },
                    { img: "pngImges/img_4.jpg", title: "Save the Money" },
                    { img: "pngImges/img_5.jpg", title: "All Promotions" },
                    { img: "pngImges/img_6.jpg", title: "Happy Sale" },
                    { img: "pngImges/img_7.jpg", title: "24/7 Support" },
                ].map((item, index) => (
                    <div className="fe-box" key={index}>
                        <a><img src={item.img} alt={item.title} /></a>
                        <h5>{item.title}</h5>
                    </div>
                ))}
            </section>

        </>
    );
};

export default AboutPage;
