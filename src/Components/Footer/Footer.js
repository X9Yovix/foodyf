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
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="footer__about">
                                <div class="footer__about__logo">
                                    <a href={() => false}><Logo /></a>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="footer__address">
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
                                        <div class="footer__social">
                                            <a href={() => false}><FontAwesomeIcon icon={['fab', 'facebook-f']} className="icons" /> </a>
                                            <a href={() => false}><FontAwesomeIcon icon={['fab', 'instagram']} className="icons" /> </a>
                                            <a href={() => false}><FontAwesomeIcon icon={['fab', 'twitter']} className="icons" /> </a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="footer__widget">
                                <ul>
                                    <li><a href={()=>false}>Home</a></li>
                                    <li><a href={()=>false}>Search</a></li>
                                    <li><a href={()=>false}>Sign In</a></li>
                                    <li><a href={()=>false}>Sign Up</a></li>
                                    <li><a href={()=>false}>Contact</a></li>
                                </ul>
                                <ul>
                                    <li><a href={()=>false}>FAQs</a></li>
                                    <li><a href={()=>false}>Test</a></li>
                                    <li><a href={()=>false}>Test</a></li>
                                    <li><a href={()=>false}>Test</a></li>
                                    <li><a href={()=>false}>Test</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <div class="footer__copyright">
                                <div class="footer__copyright__text">
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