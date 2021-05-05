import React from "react";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */
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
                                    <li>{/* <FontAwesomeIcon icon="send" /> */}<i class="fa fa-send"></i> Avenue de France, Radès</li>
                                    <li>{/* <FontAwesomeIcon icon={['fal', 'code']} size="2.5x" /> */}<i class="fa fa-envelope"></i> contact@foody.tn</li>
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
                    <div class="col-md-8">
                        <form action="#" class="">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                            </div>
                            <textarea placeholder="Message" className="form-control"></textarea>
                            <Button color="primary">SEND MESSAGE</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact