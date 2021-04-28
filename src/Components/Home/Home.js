import React, { useEffect } from 'react';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {

    /* let content = document.querySelector(".content");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");

    useEffect(() => {
        left.addEventListener('mouseenter', () => {
            content.classList.add('hover-left');
        })

        left.addEventListener('mouseleave', () => {
            content.classList.remove('hover-left');
        })

        right.addEventListener('mouseenter', () => {
            content.classList.add('hover-right');
        })

        right.addEventListener('mouseleave', () => {
            content.classList.remove('hover-right');
        })
    }); */


    return (
        <>
            <h1>Home page</h1>
            <Link to="/orderfood" className='button'>Order Food</Link><br />
            <Link to="/reservation" className='button'>Reservation</Link>
            <div className="content">
                <div className="split left">
                    <img src="https://www.thefoodcorridor.com/wp-content/uploads/2019/04/shutterstock_1072334861.jpg" alt="" className="Delivery" />
                    <div className="text">
                        <Link to="/orderfood" className='button'>Order Food</Link>
                    </div>
                </div>
                <div className="split right">
                    <img src="https://cdn.theculturetrip.com/wp-content/uploads/2017/08/restaurant-691397_1280.jpg" alt="" className="Reservation" />
                    <div className="text">
                        <Link to="/reservation" className='button'>Reservation</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home