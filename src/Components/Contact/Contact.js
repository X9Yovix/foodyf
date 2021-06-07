import React, { useState } from 'react';
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

import axios from 'axios';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { useHistory } from "react-router-dom";

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

const formData = new FormData();
const Contact = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('message', message);
    const [openMessage, setOpenMessage] = useState(false);
    const handleClose = () => {
        setOpenMessage(false);
    };
    const history = useHistory("");
    const SubmitContact = () => {
        axios.post('http://localhost:8000/api/contact', formData)
            .then((res) => {
                console.log(res)
                setOpenMessage(true);
                history.push('/home');
            })
    }
    return (
        <div>

            <Header />
            <div className="main">
                <div className="contact_title">
                    <h2 className="mt-5 primary text-white">Contact Us</h2>
                </div>
                <Snackbar open={openMessage} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">Thanks for contacting us!</Alert>
                </Snackbar>
                <div className="container">
                    <MapWithAMarker
                        className="py-2"
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9TrEADNl14ic8hmLhEGw_S2Julmu45rE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <div className="contact_widget">
                                <div className="contact_adresse">
                                    <ul>
                                        <li><FontAwesomeIcon icon='map-marker-alt' size="2x" className="adresse" /> Avenue de France, Radès</li>
                                        <li><FontAwesomeIcon icon='envelope' size="2x" className="email" />contact@foody.tn</li>
                                        <li><FontAwesomeIcon icon='phone' size="2x" className="tel" />+216 12345678</li>
                                    </ul>
                                </div>
                                {/* <div className="contact_hours">
                                    <h4>Opening Hours</h4>
                                    <ul>
                                         style={{ color: 'black' }} 
                                        <li><FontAwesomeIcon icon='clock' size="2x" className="hours" spin /> Mon - Fri: 8:00am - 6:00pm</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <form action="#" className="contact_form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>
                                <textarea placeholder="Message" className="form-control" onChange={(e) => setMessage(e.target.value)}></textarea>
                                <Button color="primary" className="" onClick={SubmitContact}><FontAwesomeIcon icon={['far', 'paper-plane']} />  SEND MESSAGE</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Contact