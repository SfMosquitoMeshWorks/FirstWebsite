import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        // ✅ Moved comment inside JSX
        <>
            {/* Footer Section */}
            <footer className="footer mt-5 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5>About Us</h5>
                            <p>📞 Call us now: +91 8977539362 // +91 7780379362</p>
                            <p>📍 SS Mosquito Mesh, Jagathgirigutta, Quthubullapur, Medchal</p>

                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="two-columns">
                                <li><a href="AboutUs"><b>AboutUs</b></a></li>
                                <li><a href="Projects"><b>Projects</b></a></li>
                                <li><a href="ContactUs"><b>ContactUs</b></a></li>
                                <li><a href="Gallery"><b>Gallery</b></a></li>
                                <li><a href="#"><b>Terms & conditions</b></a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/share/16WnWy22kV/" target="_blank" rel="noopener noreferrer" className="fb">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/vidyadhan_non_profit_org/" target="_blank" rel="noopener noreferrer" className="insta">
                                    <FaInstagram style={{ fontSize: '34px', color: 'red' }} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="animated-icon">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="lnkdn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://wa.me/8686963526" target="_blank" rel="noopener noreferrer" className="animated-icon">
                                    <FaWhatsapp style={{ fontSize: '34px', color: '#25D366' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copy" className="copyright">
                    <p>© 2025 MHS Trendy Tech & Codes. Innovating the Future. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
