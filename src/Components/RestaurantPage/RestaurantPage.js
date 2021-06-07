import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import './RestaurantPage.css';
import { Link } from "react-router-dom";

function RestaurantPage(props) {
    const [dataSearch, setDataSearch] = useState([]);
    useEffect(async () => {
        //const result = await axios.get('http://localhost:8000/api/search/' + resData);
        //console.log(result.data);
        console.log(props);
        let resultat = await fetch('http://localhost:8000/api/getrestid/' + props.match.params.resid);
        resultat = await resultat.json();

        setDataSearch(resultat);
    }, []);
    console.log(dataSearch)
    return (
        <>
            <Header />
            {
                dataSearch.map((item) =>

                    <section style={{ marginTop: 150 }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <img src={"http://127.0.0.1:8000/storage/" + item.picture} alt="Restaurant Picture" className="img-restaurant-page" />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Restaurant name: </h4>
                                    <p>{item.restaurant_name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {
                                        JSON.parse(item.service).Reservation === true &&
                                        <>

                                            <Link to={`/${item.restaurant_name}/reservation/${item.id}`} className='disabled-link-router' ><button className="btn btn-primary mx-2">Reservation</button></Link>

                                        </>
                                    }
                                    {
                                        JSON.parse(item.service).Takeout === true &&
                                        <>

                                            <button className="btn btn-success mx-2">Takeout</button>

                                        </>
                                    }
                                    {
                                        JSON.parse(item.service).Delivery === true &&
                                        <>

                                            <button className="btn btn-info m-auto mx-2">Delivery</button>

                                        </>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h4>Description: </h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h4>Adresse: </h4>
                                    <p>{item.adresse}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            {/* <section className="sectionUPR">
                <div className="pos-upr">
                    <div className="upr-content" style={{ padding: 15, margin: 'auto', maxWidth: 900 }}>
                        <div className="upr-form">
                            <div className="form-group">
                                <form noValidate autoComplete="off" >
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="" />
                                        </div>
                                    </div>
                                    <Grid item xs={12}>
                                        <img src="" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            className=""
                                            startIcon={<SaveIcon />}
                                        >Update</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            className=""
                                            startIcon={<SaveIcon />}
                                        >Update</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            className=""
                                            startIcon={<SaveIcon />}
                                        >Update</Button>
                                    </Grid>
                                </form>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className=""
                                    startIcon={<SaveIcon />}
                                >Update</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </>
    );
}
export default RestaurantPage