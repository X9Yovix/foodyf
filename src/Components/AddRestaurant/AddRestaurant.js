import React, { useState } from "react";
import Header from '../Header/Header'
import { FormControlLabel, FormGroup, TextField, Checkbox, Button } from '@material-ui/core';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
const formData =  new FormData();
function AddRestaurant() {
    const [restaurantName, setRestaurantName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [description, setDescription] = useState("");

    const [state, setState] = useState({
        Delivery: false,
        Takeout: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const addRes = () => {
        console.log(state);
    }

    formData.append('restaurant_name',restaurantName);
    formData.append('description',description);
    //formData.append('pictures',pictures);
    
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
                            <TextField id="outlined-basic-first-name" label="Restaurant Name" variant="outlined" className="ml-auto w-50" onChange={(e) => setRestaurantName(e.target.value)} />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="file" multiple onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField id="outlined-basic-first-name" label="Description" variant="outlined" className="ml-auto w-50" onChange={(e) => setDescription(e.target.value)} />
                            {/*  <TextField id="outlined-basic-first-name" label="Services" variant="outlined" className="ml-auto w-50" onChange={(e) => setFirstName(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Primary"
                                />

                            </FormGroup> */}
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={state.Delivery} onChange={handleChange} name="Delivery" icon={<StarBorderRoundedIcon />} checkedIcon={<LocalShippingRoundedIcon />} name="Delivery" />
                                    }
                                    label="Delivery"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.Takeout} onChange={handleChange} name="Takeout" icon={<StarBorderRoundedIcon />} checkedIcon={<DirectionsWalkRoundedIcon />} name="Takeout" />}
                                    label="Takeout"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Button variant="outlined" color="primary" onClick={addRes} >Primary</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRestaurant