import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";  // ✅ import Link
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer mt-5 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5>About Us</h5>
                            <p>📞 Call us now: +91 9121471387  // +91 7671941667</p>
                            <p>📍 SF Mosquito Mesh Works Plot no. 7-59/B, Pipe Line Road, Subhash Nagar, Jeedimetla, Hyderabad - 500054</p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="two-columns">
                                <li><Link to="/about"><b>About Us</b></Link></li>
                                <li><Link to="/projects"><b>Projects</b></Link></li>
                                <li><Link to="/contact"><b>Contact Us</b></Link></li>
                                <li><Link to="/gallery"><b>Gallery</b></Link></li>
                                <li><Link to="/terms"><b>Terms & Conditions</b></Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/share/16WnWy22kV/" target="_blank" rel="noopener noreferrer" className="fb">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/sfmosquitomesh/" target="_blank" rel="noopener noreferrer" className="insta">
                                    <FaInstagram style={{ fontSize: '34px', color: 'red' }} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="animated-icon">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="lnkdn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://wa.me/9121471387" target="_blank" rel="noopener noreferrer" className="animated-icon">
                                    <FaWhatsapp style={{ fontSize: '34px', color: '#25D366' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copy" className="copyright">
                    <p>© 2025 SF Mosquito Mesh Works. Securing the Houses from Mosquitoes. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
