import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './FindRestaurant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomChatbot from '../chatbot/Config';
import { motion } from 'framer-motion';
const pageVariant = {
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: "-100%",
    }
};
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};
const FindRestaurant = () => {

    return (
        <>
            <Header />
            <CustomChatbot />
            <section className="bg-order-food">
                <motion.div variants={pageVariant} transition={pageTransition} exit="out" animate="in" initial="out">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="order-food-text">
                                    <div className="section-title">
                                        <h2>Discover The Best Services Near You</h2>
                                    </div>
                                    <div className="search-form">
                                        <div class="row">
                                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                {/* <div class="field-holder"> */}
                                                <FontAwesomeIcon icon="search" className="search-icon-restaurant-name " size="2x" />
                                                <input type="text" placeholder="Resturant name" className="search-inputs-find-rest" />
                                                {/* </div> */}
                                            </div>
                                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">

                                                <FontAwesomeIcon icon="map-marker-alt" className="search-icon-location" size="2x" />
                                                <input type="text" placeholder="Location" className="search-inputs-find-rest" />

                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">

                                                <button type="submit">Explore Now</button>

                                            </div>
                                        </div>
                                        {/* <form action="#" className="form-order-food">
                                        <FontAwesomeIcon icon="search" className="search-icon-restaurant-name " />
                                        <input type="text" className="search-inputs effect-11 col-md-4 col-sm-12" placeholder="Restaurant Name" />
                                        <FontAwesomeIcon icon="map-marker-alt" className="search-icon-location " />
                                        <input type="text" className="search-inputs col-md-4 col-sm-12" placeholder="Location" />
                                        <button type="submit">Explore Now</button>
                                    </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>

    );
}

export default FindRestaurant