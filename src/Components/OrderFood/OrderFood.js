import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './OrderFood.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderFood = () => {

    return (
        <div>
            <Header />
            <section className="bg-order-food">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="order-food-text">
                                <div className="section-title">
                                    <h2>Discover The Best Services Near You</h2>
                                </div>
                                <div className="search-form">
                                    <form action="#">
                                        <FontAwesomeIcon icon="search" className="search-icon-restaurant-name" />
                                        <input type="text" className="search-inputs effect-11" placeholder="Restaurant Name" />
                                        <FontAwesomeIcon icon="map-marker-alt" className="search-icon-location" />
                                        <input type="text" className="search-inputs" placeholder="Location" />
                                        <button type="submit">Explore Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default OrderFood