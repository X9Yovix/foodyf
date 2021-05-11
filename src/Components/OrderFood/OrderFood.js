import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './OrderFood.css';

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
                                        <input type="text" placeholder="Search..." />
                                        <div className="select-option">
                                            <select>
                                                <option value="">Choose Categories</option>
                                            </select>
                                        </div>
                                        <div className="select-option">
                                            <select>
                                                <option value="">Choose Location</option>
                                            </select>
                                        </div>
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