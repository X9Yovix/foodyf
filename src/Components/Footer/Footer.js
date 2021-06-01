import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from '../Logo/Logo';
import './Footer.css';
function Footer() {

    const objDate = new Date();
    //const [date, setDateND] = useState(objDate.getFullYear());
    const date = objDate.getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <Logo />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__address">
                                <ul>
                                    <li className="col-md-4">
                                        <span>Call Us:</span>
                                        <p>(+216) 12345678</p>
                                    </li>
                                    <li className="col-md-4">
                                        <span>Email:</span>
                                        <p>contact@foody.com</p>
                                    </li>
                                    <li className="col-md-4">
                                        <span>Connect Us:</span>
                                        <div className="footer__social">
                                           <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icons" />
                                            <FontAwesomeIcon icon={['fab', 'instagram']} className="icons" />
                                           <FontAwesomeIcon icon={['fab', 'twitter']} className="icons" />
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="footer__widget">
                                <ul>
                                    <li>Home</li>
                                    <li>Search</li>
                                    <li>Sign In</li>
                                    <li>Sign Up</li>
                                    <li>Contact</li>
                                </ul>
                                <ul>
                                    <li>FAQs</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                    <li>Test</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text">
                                    <p>
                                        {date} Copyright  All rights reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer