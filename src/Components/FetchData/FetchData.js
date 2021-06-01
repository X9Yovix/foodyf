import React, { useState, useEffect } from 'react';
import "./FetchData.css";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import axios from 'axios';
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
let filterData = [];
const FetchData = (props) => {

    //let resData = JSON.parse(localStorage.getItem('fetcheddata'));
    const [dataSearch, setDataSearch] = useState([]);
    const [typerestaurant, setTypeRestaurant] = useState(false);
    const [stateRestaurant, setStateRestaurant] = useState("");
    //const [dataJson, setdataJson] = useState();
    //let resData = localStorage.getItem('fetcheddata');

    //console.log(JSON.parse(dataSearch[0].state));

    //function getLocalStorageData() {
    
    const clickFilterD = () => {
        
        filterData = dataSearch.filter(item=>JSON.parse(item.state).Delivery === true);
        setTypeRestaurant(true);
        console.log(filterData);
        setStateRestaurant("Delivery");
    }
    const clickFilterR = () => {
        
        filterData = dataSearch.filter(item=>JSON.parse(item.state).Reservation === true);
        setTypeRestaurant(true);
        console.log(filterData);
        setStateRestaurant("Reservation");
    }
    const clickFilterT = () => {
        
        filterData = dataSearch.filter(item=>JSON.parse(item.state).Takeout === true);
        setTypeRestaurant(true);
        console.log(filterData);
        setStateRestaurant("Takeout");
    }
    /* const clickShowAll = () => {
        
        filterData=dataSearch;
        setTypeRestaurant(true);
        console.log(filterData);
        setStateRestaurant("All");
    } */
    //console.log(filterData)
    useEffect(async () => {
        const result = await axios.get('http://localhost:8000/api/search/' + props.match.params.searchPattern)
        .then((res) => setDataSearch(res.data))
        .catch((err) => console.log(err))
        //console.log(result.data);
        //let resultat = await fetch('http://localhost:8000/api/search/' + resData);
        //resultat = await resultat.json();

        //setDataSearch(resultat);
        

       
    }, []);

    //console.log(dataSearch);


    /* useEffect( () => {
        const result = axios.get(
            'http://localhost:8000/api/search/' + resData,
        );

        setDataSearch({...result.data});
    },[]);
    console.log(dataSearch); */
    //}
    const allFetchedData = dataSearch.map((item) =>
        <div className="col-md-4 col-sm-6 item">
            <div className="fetched-data-text">
                <div className="card item-card card-block my-4">
                <img src={"http://127.0.0.1:8000/storage/" + item.picture} alt="Restaurant" />
                    <div className="item-card-title mt-3 mb-3 px-2">
                        <h6 className="float-left">{item.restaurant_name}</h6>
                        {/*  <span className="float-right"><FontAwesomeIcon icon="star" size="1x" /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span> */}
                    </div>
                    <p className="card-text text-left px-3">
                        <p className="py-1">
                            <FontAwesomeIcon icon="map-marker-alt" size="1x" /> <span >{item.adresse}</span>
                        </p>
                        <p>
                            <span className="">Services: </span>
                        </p>
                        <p>
                            {
                                JSON.parse(item.state).Reservation === true &&
                                <><FontAwesomeIcon icon="utensils" size="1x" /> <span> Reservation</span></>

                            }
                            {
                                JSON.parse(item.state).Takeout === true &&
                                <>
                                    <FontAwesomeIcon icon="shopping-bag" size="1x" className="ml-3" /><span>Takeout</span>
                                </>
                            }
                            {
                                JSON.parse(item.state).Delivery === true &&
                                <>
                                    <FontAwesomeIcon icon="truck" size="1x" className="ml-5" /><span>Delivery</span>
                                </>
                            }
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )

    const filteredFetchedData = filterData.map((item) =>
        <div className="col-md-4 col-sm-6 item">
            <div className="fetched-data-text">
                <div className="card item-card card-block my-4">
                <img src={"http://127.0.0.1:8000/storage/" + item.picture} alt="Restaurant" />
                    <div className="item-card-title mt-3 mb-3 px-2">
                        <h6 className="float-left">{item.restaurant_name}</h6>
                        {/*  <span className="float-right"><FontAwesomeIcon icon="star" size="1x" /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span>
                                                <span className="float-right"><FontAwesomeIcon icon="star" size="1x" color={'yellow'} /></span> */}
                    </div>
                    <p className="card-text text-left px-3">
                        <p className="py-1">
                            <FontAwesomeIcon icon="map-marker-alt" size="1x" /> <span >{item.adresse}</span>
                        </p>
                        <p>
                            <span className="">Services: </span>
                        </p>
                        <p>
                            {
                                JSON.parse(item.state).Reservation === true &&
                                <><FontAwesomeIcon icon="utensils" size="1x" /> <span> Reservation</span></>
                            }
                            {
                                JSON.parse(item.state).Takeout === true &&
                                <>
                                    <FontAwesomeIcon icon="shopping-bag" size="1x" className="ml-3" /><span>Takeout</span>
                                </>
                            }
                            {
                                JSON.parse(item.state).Delivery === true &&
                                <>
                                    <FontAwesomeIcon icon="truck" size="1x" className="ml-5" /><span>Delivery</span>
                                </>
                            }
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <Header />
            <section className="fetchedData">
                <div className="bg-fetched-data">
                    <div className="filter">
                        <div className="filter__title">
                            <h5 className="text-white"><FontAwesomeIcon icon="filter" size="1x" /> Filter</h5>
                        </div>

                        <div className="filter__btns">
                            <div className="box-filter bg-2">
                                <button onClick={clickFilterD} className="btn btn-1"><FontAwesomeIcon icon="truck" size="1x" className="icon-info btn-sep" />Delivery</button>
                                <button onClick={clickFilterT} className="btn btn-2"><FontAwesomeIcon icon="shopping-bag" size="1x" className="icon-info btn-sep" />Takeout</button>
                                <button onClick={clickFilterR} className="btn btn-3"><FontAwesomeIcon icon="utensils" size="1x" className="icon-info btn-sep" />Reservation</button>
                                {/* <button onClick={clickShowAll} className="btn btn-3"><FontAwesomeIcon icon="all" size="1x" className="icon-info btn-sep" />All</button> */}
                            </div>

                            {/* <button type="submit">Filter Results</button>
                            <button type="submit" class="filter__reset">Reset All</button> */}
                        </div>
                    </div>
                    <div className="listing">
                        <div className="container">
                            <div className="row">
                                {
                                !typerestaurant ? allFetchedData : filteredFetchedData   
                                }
                            </div>


                        </div>


                    </div>
                    <div className="listing__map">
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