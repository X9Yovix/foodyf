import React from "react";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 36.760222850000005, lng: 10.270250318613346 }}
    >
        <Marker
            position={{ lat: 36.760222850000005, lng: 10.270250318613346 }}
        />
    </GoogleMap>
));
const Contact = () => {
    return (
        <div>

            <Header />
            <div className="main">
                <div className="contact_title">
                    <h2 className="mt-5 primary">Contact Us</h2>
                </div>
                <div className="container">
                    <MapWithAMarker
                        className="py-2"
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9TrEADNl14ic8hmLhEGw_S2Julmu45rE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <div className="row pt-3">
                        <div class="col-md-4">
                            <div class="contact_widget">
                                <div class="contact_adresse">
                                    <ul>
                                        <li><FontAwesomeIcon icon='map-marker-alt' size="2x" className="adresse" /> Avenue de France, Radès</li>
                                        <li><FontAwesomeIcon icon='envelope' size="2x" className="email" />contact@foody.tn</li>
                                        <li><FontAwesomeIcon icon='phone' size="2x" className="tel" />+216 12345678</li>
                                    </ul>
                                </div>
                                <div class="contact_hours">
                                    <h4>Opening Hours</h4>
                                    <ul>
                                        {/*  style={{ color: 'black' }}  */}
                                        <li><FontAwesomeIcon icon='clock' size="2x" className="hours" spin /> Mon - Fri: 8:00am - 6:00pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <form action="#" class="contact_form">
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
                                <Button color="primary" className="" ><FontAwesomeIcon icon={['far', 'paper-plane']} />  SEND MESSAGE</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Contact