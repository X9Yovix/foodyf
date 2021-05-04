import React from "react";
import Header from "../Header/Header";
const Contact = () => {
    return (
        <div>
            <Header />
            <h2>Contact Us</h2>
            <div className="container">
                <div className="row">
                    <div class="col-md-4">
                        <div class="">
                            <div class="">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><i class="fa fa-send"></i> Avenue de France, Radès</li>
                                    <li><i class="fa fa-envelope"></i> contact@foody.tn</li>
                                    <li><i class="fa fa-phone"></i> +216 12345678</li>
                                </ul>
                            </div>
                            <div class="">
                                <h4>Opening Hours</h4>
                                <ul>
                                    <li><i class="fa fa-clock-o"></i> Mon - Fri: 8:00am - 6:00pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                        <form action="#" class="contact__form">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                            </div>
                            <textarea placeholder="Message"></textarea>
                            <button type="submit" class="site-btn">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact