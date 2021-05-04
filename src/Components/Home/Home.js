import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="header_navbar">
                <Header />
            </div>
            <div className="wrapper">

                <div className="side left">
                    <div className="image orderfood"></div>
                    <div className="caption">
                        <h1>Order Food</h1>
                        <Link to="/orderfood" className='button'>Order Food</Link>
                    </div>
                </div>
                {/* <div className="middle">
                    <div className="imagelogo logo"></div>
                </div> */}
                <div className="side right">
                    <div className="image reservation"></div>
                    <div className="caption">
                        <h1>Reservation</h1>
                        <Link to="/reservation" className='button'>Reservation</Link>
                    </div>
                </div>
            </div>
            {/*  <h1>Home page</h1>
            <div class="content">
                <div class="split left">
                    <img src="./img/skateboard.png" alt="" class="skateboard" />
                    <div class="text">
                        <p class="subtitle">cruiser skateboard</p>
                        <h1 class="title">mmm ahhh  ..push it!</h1>
                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sint voluptatem tempora ipsam
          expedita?</p>
                        <button class="button">Discover More</button>
                    </div>
                </div>
                <div class="split right">
                    <img src="./img/shoes.png" alt="" class="shoes" />
                    <div class="text">
                        <p class="subtitle">adidas pharrel williams tennis hu</p>
                        <h1 class="title">because  i'm happy again</h1>
                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sint voluptatem tempora ipsam
          expedita?</p>
                        <button class="button">Discover More</button>
                    </div>
                </div>
            </div>
 */}
            {/*  <div class="container ">
                <div class="split left">
                    <h1>Playstation 5</h1>
                    <a href="#" class="btn">Buy Now</a>
                </div>
                <div class="split right">
                    <h1>XBox Series X</h1>
                    <a href="#" class="btn">Buy Now</a>
                </div>
            </div> */}
            {/* <Link to="/orderfood" className='button'>Order Food</Link><br />
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
            </div> */}
        </>
    );
}
export default Home