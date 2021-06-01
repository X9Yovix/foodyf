import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import './RestaurantPage.css';

function RestaurantPage() {
    const [dataSearch, setDataSearch] = useState([]);
    useEffect(async () => {
        //const result = await axios.get('http://localhost:8000/api/search/' + resData);
        //console.log(result.data);
        let resultat = await fetch('http://localhost:8000/api/');
        resultat = await resultat.json();

        setDataSearch(resultat);
    }, []);
    return (
        <>
            <Header />
            <section className="sectionUPR">
                <div className="pos-upr">
                    <div className="upr-content" style={{ padding: 15, margin: 'auto', maxWidth: 900 }}>
                        <div className="upr-form">
                            <div className="form-group">
                                <form noValidate autoComplete="off" >
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
            </section>
            <Footer />
        </>
    );
}
export default RestaurantPage