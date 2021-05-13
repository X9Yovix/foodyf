import React from "react";
import "./FetchData.css";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 36.760222850000005, lng: 10.270250318613346 }}
    >
        <Marker
            position={{ lat: 36.760222850000005, lng: 10.270250318613346 }}
        />
    </GoogleMap>
));
const FetchData = () => {
    return (
        <>
            <Header />
            <section className="fetchedData">
                <div className="bg-fetched-data">
                    <div class="filter">
                        <div class="filter__title">
                            <h5 className="text-white"><FontAwesomeIcon icon="filter" size="1x" /> Filter</h5>
                        </div>

                        <div class="filter__btns">
                            <div class="box-filter bg-2">
                                <button class="btn btn-1"><FontAwesomeIcon icon="truck" size="1x" className="icon-info btn-sep" />Delivery</button>
                                <button class="btn btn-2"><FontAwesomeIcon icon="shopping-bag" size="1x" className="icon-info btn-sep" />Takeout</button>
                                <button class="btn btn-3"><FontAwesomeIcon icon="utensils" size="1x" className="icon-info btn-sep" />Reservation</button>
                            </div>

                            {/* <button type="submit">Filter Results</button>
                            <button type="submit" class="filter__reset">Reset All</button> */}
                        </div>
                    </div>
                    <div class="listing">
                        <div class="container">

                            <div class="row">
                                <div class="col-md-4 col-sm-6 item">
                                    <div className="fetched-data-text">
                                        <div class="card item-card card-block my-4">
                                            <img src="https://picsum.photos/200/300" alt="Restaurant" />
                                            <div className="item-card-title mt-3 mb-3 px-2">
                                                <h6 className="float-left">Restaurant name</h6>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                            </div>
                                            <p class="card-text text-left px-3">
                                                <p className="py-1">
                                                    <FontAwesomeIcon icon="map-marker-alt" size="1x" /> <span >Adresse kamel</span>
                                                </p>
                                                <p>
                                                    <span className="px-5">Services: </span>
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon="utensils" size="1x" /> <span> Reservation</span>
                                                    <FontAwesomeIcon icon="truck" size="1x" className="ml-4" /><span>Delivery</span>
                                                    <FontAwesomeIcon icon="shopping-bag" size="1x" className="ml-5" /><span>Takeout</span>
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div class="listing__map">
                        <MapWithAMarker
                            className="py-2"
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9TrEADNl14ic8hmLhEGw_S2Julmu45rE&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `565px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default FetchData