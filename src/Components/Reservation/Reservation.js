import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Reservation.css';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
/* import InputBase from '@material-ui/core/InputBase';
import { DateTimePicker } from '@material-ui/pickers'
import { addDays } from 'date-fns'; */
import DateFnsUtils from '@date-io/date-fns';
/* import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'; */
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
/* import { KeyboardDateTimePicker } from "@material-ui/pickers"; */
import { createMuiTheme, TextField } from "@material-ui/core";
/* import { ThemeProvider, makeStyles, withStyles } from "@material-ui/styles"; */
import { ThemeProvider, makeStyles } from "@material-ui/styles";
/* import axios from "axios"; */
/* import lime from "@material-ui/core/colors/lime"; */

import DatePicker from "react-datepicker";
/* import addDays from 'date-fns/addDays' */
import "react-datepicker/dist/react-datepicker.css";
/* import moment from 'moment'; */
import { motion } from 'framer-motion';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 240,
    },
}));



const formData = new FormData();

function Reservation(props) {
    const history = useHistory("");
    //console.log(props.match.params.resid)
    const reqReservation = () => {
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('phone_number', phone_number);
        formData.append('date_reservation', startDate.toLocaleString());
        //formData.append('date_reservation', selectedDate);
        //formData.append('time_reservation', startDate);

        formData.append('number_of_guests', nog);
        formData.append('special_req', special_req);
        formData.append('restaurant_id', props.match.params.resid);
        //formData.append('type_reservation', resType);
        /* axios.post('',formData)
        .then((res)=> console.log(res.data)) */
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios.post('http://localhost:8000/api/reservation', formData)
            .then((res) => {
                console.log(res)
                localStorage.setItem('reservation', JSON.stringify(res))
                setOpenSucc(true);
                setTimeout(() => {
                    history.push('/home');
                }, 3000);

            }


            )
            .catch((err) => console.log(err))
        /* var utc = new Date().toJSON().slice(11, 16).replace(/-/g, '/');
        console.log(utc); */
        var utc = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        console.log(utc);
    }
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [special_req, setSpecialReq] = useState("");
    //console.log(props.match.params.resid);
    const classes = useStyles();
    const [nog, setNOG] = useState('');

    const handleChangeSelect = (event) => {
        setNOG(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }

    const [selectedTime, setSelectedTime] = useState(new Date());
    const handleTimeChange = (date) => {
        setSelectedTime(date);
    }

    console.log(selectedTime)
    /* const defaultMaterialTheme = createMuiTheme({
        palette: {
            primary: lime,
        },
    }); */
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#59d2d9',
            },
        },
    });
    /* const [startDatePicker, setStartDatePicker] = useState(new Date());
    const handleDatePickerChange = (date) => {
        setSelectedTime(date);
    } */
    /* const [startDate, setStartDate] = useState(
        new Date().setHours(new Date().setMinutes(new Date(), 30), new Date().getHours())
    ); */
    /* const [startDate, setStartDate] = useState(
        new Date().setHours(new Date().setMinutes(new Date(), 30), 17)
      );
    */
    /* const [startDate, setStartDate] = useState(new Date());
    const handleDatePickerChange = (date) => {
        setStartDate(date);
    }
    console.log(selectedDate) */

    const [startDate, setStartDate] = useState(new Date());

    const isSelectedDateToday = new Date().getDate() === startDate.getDate();
    const isSelectedDateInFuture = + startDate > + new Date();

    let minTimeHour = new Date().getHours();
    if (!isSelectedDateToday) {
        minTimeHour = 0
    };

    const date = new Date();
    let currentMins = date.getMinutes();
    let currentHour = date.getHours();
    if (isSelectedDateInFuture) {
        currentHour = 8;
        currentMins = 0;
    }

    const [openSucc, setOpenSucc] = useState(false);
    const handleClose = () => {
        setOpenSucc(false);
    };
    return (
        <>
            <Header />
            <Snackbar open={openSucc} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Reservation Done!
                </Alert>
            </Snackbar>
            {/* <section className="section-reservation">
                <div className="reservation-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero__text">
                                    <div className="section-title">
                                        <h2>Find your table for any occasion</h2>
                                    </div>
                                    <div class="hero__search__form">

                                        <input type="date" />
                                        <input type="number" />
                                        <input type="text" placeholder="location" />
                                        <input name="" id="" className="btn btn-primary" type="button" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer /> */}
            <section className="section-reservation">
                <motion.div variants={pageVariant} transition={pageTransition} exit="out" animate="in" initial="out">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="reservation-text">
                                    <div className="section-title-reservation">
                                        <h2>Make a reservation</h2>
                                    </div>
                                    <div className="search-form-reservation">

                                        <ThemeProvider theme={theme}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid item xs={12} className="py-3">
                                                    <TextField
                                                        autoComplete="off"
                                                        required
                                                        id="first_name"
                                                        label="First Name"
                                                        defaultValue=""
                                                        variant="outlined"
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} className="py-3">
                                                    <TextField
                                                        autoComplete="off"
                                                        required
                                                        id="last_name"
                                                        label="Last Name"
                                                        defaultValue=""
                                                        variant="outlined"
                                                        onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} className="py-3">
                                                    <TextField
                                                        autoComplete="off"
                                                        required
                                                        id="email"
                                                        label="Email"
                                                        defaultValue=""
                                                        variant="outlined"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} className="py-3">
                                                    <TextField
                                                        autoComplete="off"
                                                        required
                                                        id="phone_number"
                                                        label="Phone number"
                                                        defaultValue=""
                                                        variant="outlined"
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                </Grid>
                                                {/* <Grid item xs={12} className="py-3">
                                                    <KeyboardDatePicker
                                                        required
                                                        disableToolbar
                                                        variant="inline"
                                                        format="dd/MM/yyyy"
                                                        helperText={'invalid'}
                                                        minDate={selectedDate}
                                                        minDate={new Date()}
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Date"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </Grid> */}
                                                <Grid item xs={12} className="py-3">
                                                    {/* <DatePicker
                                                    selected={startDate}
                                                    
                                                    onChange={handleDatePickerChange}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    timeCaption="Time"
                                                    dateFormat="HH:mm" 
                                                    minDate={new Date()}
                                                    minTime={selectedDate ? new Date(new Date().setHours(new Date().getHours(), 0, 0, 0)) : new Date().setHours(new Date().getHours(), 0, 0, 0)}
                                                    maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
                                                
                                                    /> */}
                                                    {/* hada yemchi */}
                                                    {/* <DatePicker
                                                    selected={startDate}
                                                    onChange={handleDatePickerChange}
                                                    showTimeSelect
                                                    minTime={new Date() ? new Date(new Date().setHours(new Date().getHours(), 0, 0, 0)) : new Date().setHours(8, 0, 0, 0)}
                                                    maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                    minDate={new Date()}
                                                /> */}
                                                    <DatePicker
                                                        showTimeSelect
                                                        placeholderText="select a date"
                                                        selected={startDate}
                                                        onChange={date => setStartDate(date)}
                                                        minDate={new Date()}
                                                        minTime={new Date(new Date().setHours(currentHour, currentMins, 0, 0))}
                                                        maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
                                                        timeFormat="HH:mm"
                                                        dateFormat="dd/MM/yyyy h:mm aa"

                                                    />
                                                    {/* <DatePicker
                                                    isClearable

                                                    selected={startDate}
                                                    onChange={handleDatePickerChange}
                                                    minDate={new Date()}
                                                    minTime={selectedDate ? new Date(new Date().setHours(new Date().getHours(), 0, 0, 0)) : new Date().setHours(new Date().getHours(), 0, 0, 0)}
                                                    //minTime={new Date(new Date().setHours(new Date().getHours(), 0, 0, 0))}
                                                    maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
                                                    selected={input.value ? moment(input.value, 'America/New_York') : null}
                                                    todayButton="Today"
                                                    timeCaption="Time"
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                /> */}
                                                    {/* <DatePicker
                                                    selected={startDate}
                                                    onChange={handleDatePickerChange}
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={20}
                                                    timeCaption="time"
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                    minDate={new Date()}
                                                    minTime={dp.setHours(dp.setMinutes(new Date(), 0), 17)}
                                                    maxTime={dp.setHours(dp.setMinutes(new Date(), 30), 20)}
                                      
                                                /> */}
                                                    {/*  <KeyboardTimePicker
                                                    ampm={false}

                                                    required
                                                    disablePast
                                                    minutesStep={5}

                                                    minTime={new Date()}
                                                    minDateMessage={"invalid date"}
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="Time"
                                                    value={selectedTime}
                                                    onChange={handleTimeChange}

                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                /> */}
                                                    {/* <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    timeCaption="Time"
                                                    dateFormat="h:mm aa"
                                                    minTime={new Date().setHours(new Date().setMinutes(new Date(), 0), 17)}
                                                    maxTime={new Date().setHours(new Date().setMinutes(new Date(), 30), 20)}
                              
                                                /> */}
                                                    {/*  <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    showTimeSelect
                                                    minTime={new Date().setHours(new Date().setMinutes(new Date(), 0), 17)}
                                                    maxTime={new Date().setHours(new Date().setMinutes(new Date(), 30), 20)}
                                                    dateFormat="MMMM d, yyyy h:mm"
                                                /> */}

                                                    {/* <TimePicker
                                                ampm={false}
                                                    value={selectedTime}

                                                    onChange={handleTimeChange}
                                                    minDate={addDays(new Date(), -15)} 
                                                
                                                /> */}
                                                    {/* <KeyboardDateTimePicker
                                                    value={selectedNewDate}
                                                    onChange={handleNewDateChange}
                                                    label="Keyboard with error handler"
                                                    onError={console.log}
                                                    minDate={new Date()}
                                                    format="dd/MM/yyyy hh:mm"
                                                /> */}
                                                    {/* <DateTimePicker ampm={false} onChange={handleTimeChange} minDate={addDays(new Date(), -15)} /> */}
                                                </Grid>
                                                {/* <Grid item xs={12} className="py-3">
                                                <FormControl variant="outlined" className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Reservation type</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        value={resType}
                                                        onChange={handleChangeSelect}
                                                        label="resType"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Private</MenuItem>
                                                        <MenuItem value={20}>Birthday</MenuItem>
                                                        <MenuItem value={30}>Holiday</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid> */}
                                                <Grid item xs={12} className="py-3">
                                                    <FormControl variant="outlined" className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-outlined-label">Number of guests</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            value={nog}
                                                            onChange={handleChangeSelect}
                                                            label="resType"
                                                        >
                                                            {/* <MenuItem value="">
                                                            <em>1</em>
                                                        </MenuItem> */}
                                                            <MenuItem value={1}>1</MenuItem>
                                                            <MenuItem value={2}>2</MenuItem>
                                                            <MenuItem value={3}>3</MenuItem>
                                                            <MenuItem value={4}>4</MenuItem>
                                                            <MenuItem value={5}>5</MenuItem>
                                                            <MenuItem value={6}>6</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    {/* <TextField label="reservation type fi select , private , birthday,holiday" /> */}
                                                </Grid>
                                                <Grid item xs={12} className="py-3">
                                                    {/*  <TextField label="special requests fi text area" /> */}
                                                    {/* <TextareaAutosize aria-label="special requests " rowsMin={6} placeholder="special requests" />; */}
                                                    <label className="text-white">Special requests:</label>
                                                    <br />
                                                    <textarea id="editor" rows="5" cols="50" onChange={(e) => setSpecialReq(e.target.value)}></textarea>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <button type="submit" onClick={reqReservation} className="explore-reservation">Submit</button>
                                                </Grid>

                                            </MuiPickersUtilsProvider>
                                        </ThemeProvider>

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
export default Reservation