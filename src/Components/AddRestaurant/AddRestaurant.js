import React, { useState, useEffect } from "react";
import Header from '../Header/Header'
import { FormControlLabel, FormGroup, TextField, Checkbox, Button, Paper, Grid } from '@material-ui/core';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import { motion } from 'framer-motion';
import './AddRestaurant.css';
const formData = new FormData();
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
function AddRestaurant() {
    const [restaurantName, setRestaurantName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPictures] = useState("");
    const [adresse, setAdresse] = useState("");
    const [state, setState] = useState({
        Delivery: false,
        Takeout: false,
        Reservation: false,
    });
    useEffect(() => {
        if (localStorage.getItem('restaurant-created')) {
            history.push('/home')
        }
    })
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    /* const addRes = () => {
        console.log(state);
    } */
    const history = useHistory("");

    const setRestaurant = () => {
        let data = JSON.parse(localStorage.getItem('user-informations'));
        console.log(data)
        /* let slug = restaurantName.replace(/ /g, "_"); */
        //console.log(JSON.stringify(state));
        let jsonState = JSON.stringify(state);
        formData.append('restaurant_name', restaurantName);
        //formData.append('slug', slug);
        formData.append('description', description);
        formData.append('adresse', adresse);
        formData.append('picture', picture);
        formData.append('service', jsonState);
        //formData.append('state', state);
        formData.append('id_user', data.data.id);
        //console.log(formData);
        //console.log(jsonState)
        /*formData.forEach((key,value) => {
            console.log(key,value)
        });*/
        //console.log(slug)

        axios.post('http://localhost:8000/api/addres', formData)
            .then(res => {
                axios.put('http://localhost:8000/api/updaterole/' + data.data.id)
                localStorage.setItem("restaurant-created", JSON.stringify(res))

                /* axios.put('http://localhost:8000/api/getuserinfo/' + data.data.id)
                    .then(resUser => {
                        localStorage.removeItem('user-informations');
                        localStorage.setItem('user-informations', JSON.stringify(resUser));
                    }) */
                history.push('/home')
                window.location.reload(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div>
                <Header />
                <section className="sectionUPR">
                    <motion.div variants={pageVariant} transition={pageTransition} exit="out" animate="in" initial="out">
                        <div className="pos-addres">
                            <h1 className="text-white">Add Restaurant</h1>
                            <div className="upr-content" style={{ padding: 15, margin: 'auto', maxWidth: 600 }}>
                                <div className="upr-form">
                                    <form noValidate className="">
                                        <Paper style={{ padding: 16 }}>
                                            <Grid container alignItems="flex-start" spacing={5}>
                                                <Grid item xs={12}>
                                                    <TextField id="RestaurantName" label="Restaurant Name" variant="filled" autoComplete='off' required fullWidth={true} onChange={(e) => setRestaurantName(e.target.value)} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField id="Description" label="Description" variant="filled" autoComplete='off' required fullWidth={true} onChange={(e) => setDescription(e.target.value)} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField id="Adresse" label="Adresse" variant="filled" autoComplete='off' required fullWidth={true} onChange={(e) => setAdresse(e.target.value)} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <label htmlFor="upload-photo">
                                                        <input
                                                            style={{ display: "none" }}
                                                            id="upload-photo"
                                                            name="upload-photo"
                                                            type="file"
                                                            multiple onChange={(e) => setPictures(e.target.files[0])}
                                                        />
                                                        <Button color="secondary" variant="contained" component="span">
                                                            Restaurant Image
                                                </Button>
                                                    </label>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormGroup row>
                                                        <FormControlLabel
                                                        
                                                            control={
                                                                <Checkbox checked={state.Delivery} onChange={handleChange} name="Delivery" icon={<StarBorderRoundedIcon />} checkedIcon={<LocalShippingRoundedIcon />} />
                                                            }
                                                            label="Delivery"
                                                        />
                                                        <FormControlLabel
                                                            control={<Checkbox checked={state.Takeout} onChange={handleChange} name="Takeout" icon={<StarBorderRoundedIcon />} checkedIcon={<DirectionsWalkRoundedIcon />} />}
                                                            label="Takeout"
                                                        />
                                                        <FormControlLabel
                                                            control={<Checkbox checked={state.Reservation} onChange={handleChange} name="Reservation" icon={<StarBorderRoundedIcon />} checkedIcon={<EventSeatIcon />} />}
                                                            label="Reservation"
                                                        />
                                                    </FormGroup>
                                                </Grid>

                                                <Grid item xs={6} style={{ marginTop: 16 }}>
                                                    <Button
                                                        type="reset"
                                                        variant="contained"
                                                    >Reset</Button>
                                                </Grid>
                                                <Grid item xs={6} style={{ marginTop: 16 }}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={setRestaurant}
                                                    >Add Restaurant</Button>
                                                </Grid>
                                            </Grid>
                                        </Paper>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

            </div>
        </>
    );
}

export default AddRestaurant