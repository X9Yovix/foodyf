/* import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import SaveIcon from '@material-ui/icons/Save'; */
/* const formData = new FormData(); */
/* function UpdateRestaurant() {
    const [datarest, setData] = useState([]);
    const [restaurant_name, setRestaurantName] = useState("");
    const [description, setDescription] = useState("");
    const [adresse, setAdresse] = useState("");
    let restName = (localStorage.getItem('restaurant-created'));
    //console.log(restName);
    useEffect(() => {
        getResId()
    }, []);
    
    const getResId = async () => {
        let res = await fetch('http://localhost:8000/api/getrestid/' + restName);
        res = await res.json();
        //console.log(res);
        //let x = JSON.parse(res.state);
        //console.log(x);
        setData(res);

    }
    console.log("test data",datarest);
    return (

        <div>
            <Header />
            <div className="container">
                <h2>Update Restaurant</h2>
                <button hidden >show restaurant </button>
                <form>
                    <div className="form-group">
                        {
                            datarest.map((item) =>
                                <div key={item.id}>

                                    <input type="text" name="restaurant name" className="" onChange={(e) => setRestaurantName(e.target.value)} value={item.restaurant_name} />
                                    <br />
                                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={item.description} />
                                    <br />
                                    <input type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} value={item.adresse} />
                                    <br />
                                    <br />
                                    <input type="checkbox" className="form-check-input" />
                                    <input type="checkbox" className="form-check-input" />
                                    <input type="checkbox" className="form-check-input" />
                                </div>
                            )
                        }
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className=""
                            startIcon={<SaveIcon />}
                        >Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
} */


import Header from '../Header/Header';
import { FormControlLabel, FormGroup, Checkbox, Button, Grid} from '@material-ui/core';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import SaveIcon from '@material-ui/icons/Save';

import './UpdateRestaurant.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { motion } from 'framer-motion';

var dataU = JSON.parse(localStorage.getItem('user-informations'));
var dataRes = JSON.parse(localStorage.getItem('restaurant-created'));

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
function UpdateRestaurant() {

    //console.log(dataU);
    //const [data, setData] = useState({ hits: [] });
    const history = useHistory("");
    const [dataUPR, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const [restaurantName, setRestaurantName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPictures] = useState("");
    const [adresse, setAdresse] = useState("");
    /* const [service, setService] = useState({
        Delivery: false,
        Takeout: false,
        Reservation: false,
    }); */
    const [service, setService] = useState({});


    const handleChange = (event) => {
        setService({ ...service, [event.target.name]: event.target.checked });
    };
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openUpdateErr, setOpenUpdateErr] = useState(false);
    const handleClose = () => {
        setOpenUpdate(false);
        setOpenUpdateErr(false);
    };


    const getData = () => {

        axios.get('http://localhost:8000/api/getrestidcard/' + dataU.data.id)
            .then(res => {
                setData(res.data);
                setLoading(false)
            })

    }
    useEffect(() => {
        /* const result = await axios.get(
            'http://localhost:8000/api/getrestid/' + dataU.data.id,
        ); */

        getData();
        //kan yemchi
        /* setRestaurantName(dataRes.data.restaurant_name);
        setDescription(dataRes.data.description);
        setAdresse(dataRes.data.adresse);
        setService(JSON.parse(dataRes.data.service)); */
        setRestaurantName(dataRes.data.restaurant_name);
        setDescription(dataRes.data.description);
        setAdresse(dataRes.data.adresse);
        setService(JSON.parse(dataRes.data.service));
        console.log(dataRes.data.id);
        //console.log(JSON.parse(dataRes.data.service))
        /* dataUPR.map((itemState) => {
            setRestaurantName(itemState.restaurant_name)
            setDescription(itemState.description)
            setAdresse(itemState.adresse)
        }
        ); */

        //setData({...result.data});
        //setData(result);
    }, []);




    //console.log(dataUPR[0].restaurant_name);
    //console.log(dataUPR.data[0].restaurant_name);
    //console.log(dataUPR);

    //console.log(restaurantName);
    //console.log(dataRes.data.id);


    //let jsonState = JSON.stringify(state);


    const updateRequest = async () => {
        formData.append('restaurant_name', restaurantName);
        //formData.append('slug', slug);
        formData.append('description', description);
        formData.append('adresse', adresse);
        formData.append('picture', picture);
        formData.append('service', JSON.stringify(service));
        //formData.append('service', jsonState);
        axios.post('http://localhost:8000/api/updateres/' + dataRes.data.id, formData)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setOpenUpdateErr(true);
                    history.push('/UpdateRestaurant');

                } else {
                    setOpenUpdate(true);
                    //history.push('/UpdateRestaurant');
                    localStorage.removeItem("restaurant-created");
                    localStorage.setItem("restaurant-created", JSON.stringify(res));
                    history.go(0);
                }
            })
        console.log("test data", formData);
    }

    const deleteRestaurant = async () => {
        axios.delete('http://localhost:8000/api/delete/' + dataRes.data.id)
            .then(res => {
                console.log(res);
                if (res.data.resultat) {
                    localStorage.removeItem('restaurant-created');
                    history.push('/home');
                    //setOpenErr(true);
                } else {
                    history.push('/UpdateRestaurant');
                }
            })
    }





    /* const [datarest, setData] = useState([]);
    const [restaurant_name, setRestaurantName] = useState("");
    const [description, setDescription] = useState("");
    const [adresse, setAdresse] = useState("");
    let ui = JSON.parse(localStorage.getItem('user-informations'));
    console.log(ui.data)
    useEffect(() => {
        getResId()
    }, []);

    const getResId = async () => {
        let res = await fetch('http://localhost:8000/api/getrestid/' + ui.data.id_card);
        res = await res.json();
        //console.log(res);
        //let x = JSON.parse(res.state);
        //console.log(x);
        setData(res);

    }
    console.log("test data", datarest); */

    return (
        <>
            <Header />
            <section className="sectionUPR">
                <Snackbar open={openUpdate} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">RESTAURANT UPDATED!</Alert>
                </Snackbar>
                <Snackbar open={openUpdateErr} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">Error!</Alert>
                </Snackbar>
                <motion.div variants={pageVariant} transition={pageTransition} exit="out" animate="in" initial="out">
                    <div className="pos-upr">
                        <Button onClick={deleteRestaurant} variant="contained" color="secondary" >Delete your restaurant </Button>
                        <div className="upr-content" style={{ padding: 15, margin: 'auto', maxWidth: 600 }}>
                            <div className="upr-form">
                                <div className="form-group">

                                    <form noValidate autoComplete="off" >
                                        <Grid item xs={12}>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Restaurant Name</span>
                                                </div>
                                                <input class="form-control" defaultValue={loading ? null : dataUPR[0].restaurant_name} type="text" onChange={(e) => setRestaurantName(e.target.value)} />
                                            </div>
                                            {/*  <input defaultValue={loading ? null : dataUPR[0].restaurant_name} type="text" onChange={(e) => setRestaurantName(e.target.value)} className="form-control" /> */}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Description</span>
                                                </div>
                                                <input class="form-control" defaultValue={loading ? null : dataUPR[0].description} type="text" onChange={(e) => setDescription(e.target.value)} />
                                            </div>
                                            {/* <input defaultValue={loading ? null : dataUPR[0].description} type="text" onChange={(e) => setDescription(e.target.value)} /> */}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Adresse</span>
                                                </div>
                                                <input class="form-control" defaultValue={loading ? null : dataUPR[0].adresse} type="text" onChange={(e) => setAdresse(e.target.value)} />
                                            </div>
                                            {/* <input defaultValue={loading ? null : dataUPR[0].adresse} type="text" onChange={(e) => setAdresse(e.target.value)} /> */}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Update Picture</span>
                                                </div>
                                                <input class="form-control" type="file" onChange={(e) => setPictures(e.target.files[0])} />
                                            </div>
                                            {/* <input
                                                id="upload-photo"
                                                name="upload-photo"
                                                type="file"
                                                onChange={(e) => setPictures(e.target.files[0])}
                                            /> */}
                                            {/*  <Button color="secondary" variant="contained" component="span">
                                            Upload button
                                                </Button> */}


                                        </Grid>
                                        <Grid item xs={12}
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center">
                                            {
                                                dataUPR.map((item) =>
                                                    <FormGroup row key={item}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox defaultChecked={JSON.parse(item.service).Delivery === true} onChange={handleChange} name="Delivery" icon={<StarBorderRoundedIcon />} checkedIcon={<LocalShippingRoundedIcon />} />
                                                            }
                                                            label="Delivery"
                                                        />
                                                        <FormControlLabel
                                                            control={<Checkbox defaultChecked={JSON.parse(item.service).Takeout === true} onChange={handleChange} name="Takeout" icon={<StarBorderRoundedIcon />} checkedIcon={<DirectionsWalkRoundedIcon />} />}
                                                            label="Takeout"
                                                        />
                                                        <FormControlLabel
                                                            control={<Checkbox defaultChecked={JSON.parse(item.service).Reservation === true} onChange={handleChange} name="Reservation" icon={<StarBorderRoundedIcon />} checkedIcon={<EventSeatIcon />} />}
                                                            label="Reservation"
                                                        />
                                                    </FormGroup>
                                                )
                                            }

                                        </Grid>

                                        <Grid item xs={12}>
                                            <img src={loading ? null : "http://127.0.0.1:8000/storage/" + dataUPR[0].picture} alt="Restaurant" className="my-5 img-fluid" />
                                        </Grid>

                                    </form>
                                    {/* {
                                    datarest.map((item) =>
                                        <form noValidate autoComplete="off" key={item.id}>
                                            <Grid item xs={12}>
                                                <TextField required variant="filled" id="standard-required" label="Restaurant Name" defaultValue="Hello World" onChange={(e) => setRestaurantName(e.target.value)} value={item.restaurant_name}  />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="filled-basic" label="Description"  variant="filled" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="filled-basic" label="Adresse" variant="filled" />
                                            </Grid>
                                        </form>
                                    )
                                } */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className=""
                                        startIcon={<SaveIcon />}
                                        onClick={updateRequest}
                                    >Update</Button>
                                </div>
                                {/*  <form noValidate className="">
                                <Paper style={{ padding: 16 }}>
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField id="filled-basic" label="Restaurant Name" variant="filled"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="filled-basic" label="Description" variant="filled" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="filled-basic" label="Adresse" variant="filled" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <label htmlFor="upload-photo">
                                                <input
                                                    style={{ display: "none" }}
                                                    id="upload-photo"
                                                    name="upload-photo"
                                                    type="file"
                                                />
                                                <Button color="secondary" variant="contained" component="span">
                                                    Upload button
                                                </Button>
                                            </label>
                                        </Grid>

                                        <Grid item xs={6} style={{ marginTop: 16 }}>
                                            <Button
                                                type="button"
                                                variant="contained"
                                            >Reset</Button>
                                        </Grid>
                                        <Grid item xs={6} style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                            >Update</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>

                            </form>
                        */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
export default UpdateRestaurant