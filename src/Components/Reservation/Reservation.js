import React, { useState } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Reservation.css';
/* import Grid from '@material-ui/core/Grid'; */
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
/* import lime from "@material-ui/core/colors/lime"; */

function Reservation() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    }

    const [selectedTime, setSelectedTime] = useState(new Date());

    const handleTimeChange = (date) => {
        setSelectedTime(date);
    }

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
    return (
        <>
            <Header />
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="reservation-text">
                                <div className="section-title-reservation">
                                    <h2>Find your table for any occasion</h2>
                                </div>
                                <div className="search-form-reservation">
                                    <div class="row">
                                        <ThemeProvider theme={theme}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="dd/MM/yyyy"
                                                        minDate={selectedDate}
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Date"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </div>
                                                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                    <KeyboardTimePicker
                                                        minutesStep={5}
                                                        margin="normal"
                                                        id="time-picker"
                                                        label="Time"
                                                        value={selectedTime}
                                                        onChange={handleTimeChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change time',
                                                        }}
                                                    />
                                                </div>
                                                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">

                                                    <button type="submit" className="explore-reservation">Explore Now</button>

                                                </div>

                                            </MuiPickersUtilsProvider>
                                        </ThemeProvider>
                                    </div>

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
            </section>
            <Footer />
        </>
    );
}
export default Reservation