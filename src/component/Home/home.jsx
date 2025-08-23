import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Carousel } from "react-bootstrap";
import {
    FaWhatsapp
} from "react-icons/fa";
import "./home.css";

const Home = () => {
    return (
        <div className="home mt-5">
            {/* Carousel Section */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 animated-carousel"
                        src="Cover Page 1.jpg"
                        height="400px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide Label</h3>
                        <p>Some text about the first slide...</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 animated-carousel"
                        src="img8.jpeg"
                        alt="Second slide"
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide Label</h3>
                        <p>Some text about the second slide...</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 animated-carousel"
                        src="imhg10.jpeg"
                        alt="Third slide"
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>Third Slide Label</h3>
                        <p>Some text about the third slide...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section id="about-head" className="section-p1">
                <img src="Cover page 1.jpg" alt="not working" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>
                        Style meets creativity in our designs. We believe that every outfit tells a story, blending elegance with
                        innovation to create timeless pieces. Our designs are crafted to celebrate individuality and inspire confidence.
                        From classic cuts to modern trends, we bring creativity to life in every detail. Explore our collection and
                        redefine your style with us
                    </p>
                    <abbr title="Explanation or context for the text">
                        Style meets creativity in our designs. We believe that every outfit tells a story, blending elegance with innovation
                        to create timeless pieces.
                    </abbr>
                    <br /><br />
                    <marquee bgcolor="#ccc" loop="-1" scrollAmount="5" width="100%">
                        Style meets Celebrate your individuality and embrace confidence with our elegantly crafted, timeless, and creatively inspired designs.
                    </marquee>
                </div>
            </section>

            {/* Main Centered Video with Hover Message */}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Our Premium Sliding Mesh Videos</h1>
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                        <div className="video-wrapper">
                            <video controls className="main-video" poster="mesh-logo.jpeg">
                                <source src="/mesh.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="video-overlay">
                                <p>
                                    This premium sliding mesh video shows how our system protects your home from mosquitoes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid of 6 Smaller Videos */}
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="video-wrapper small-video">
                            <video controls className="responsive-video" poster="thumb1.jpg">
                                <source src="videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-overlay">
                                <p>Sliding Mesh on Balcony — Perfect for Ventilation</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="video-wrapper small-video">
                            <video controls className="responsive-video" poster="thumb2.jpg">
                                <source src="videos/video2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-overlay">
                                <p>Door Mesh in Kitchen Area — Sleek & Functional</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="video-wrapper small-video">
                            <video controls className="responsive-video" poster="thumb3.jpg">
                                <source src="videos/video3.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-overlay">
                                <p>Premium Sliding Mesh Demo — Living Room Setup</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

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

            <a
                href="tel:+919121471387"
                className="call-float"
                aria-label="Call Now"
            >
                <i className="fas fa-phone call-icon" />
            </a>

        </div>
    );
};

export default Home;