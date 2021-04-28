import React, { useState } from "react";
import Header from '../Header/Header'
import { FormControlLabel, FormGroup, TextField, Checkbox, Button } from '@material-ui/core';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import axios from "axios";
import { useHistory } from 'react-router-dom';
const formData = new FormData();
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

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    /* const addRes = () => {
        console.log(state);
    } */
    const history = useHistory("");

    const setRestaurant = () => {
        let data = JSON.parse(localStorage.getItem('user-informations'));
        //console.log(JSON.stringify(state));
        let jsonState = JSON.stringify(state);
        formData.append('restaurant_name', restaurantName);
        formData.append('description', description);
        formData.append('adresse', adresse);
        formData.append('picture', picture);
        formData.append('state', jsonState);
        //formData.append('state', state);
        formData.append('user_id', data.data.id_card);
        //console.log(formData);
        console.log(jsonState)
        /*formData.forEach((key,value) => {
            console.log(key,value)
        });*/
        axios.post('http://localhost:8000/api/addres', formData)
            .then(res => {
                console.log(res)
                history.push('/home');
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Add Restaurant</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField id="RestaurantName" label="Restaurant Name" variant="outlined" className="ml-auto w-50" onChange={(e) => setRestaurantName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="file" multiple onChange={(e) => setPictures(e.target.files[0])} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField id="Description" label="Description" variant="outlined" className="ml-auto w-50" onChange={(e) => setDescription(e.target.value)} />
                            {/*  <TextField id="outlined-basic-first-name" label="Services" variant="outlined" className="ml-auto w-50" onChange={(e) => setFirstName(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField id="Adresse" label="Adresse" variant="outlined" className="ml-auto w-50" onChange={(e) => setAdresse(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Button variant="outlined" color="primary" onClick={setRestaurant} >Add</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRestaurant