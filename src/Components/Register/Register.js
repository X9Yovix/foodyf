import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import './Register.css'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, TextField, IconButton, OutlinedInput, InputLabel, InputAdornment } from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useFormik } from "formik";
import * as Yup from 'yup';

const formData = new FormData();
const Register = () => {
    const [openErr, setOpenErr] = useState(false);

    const [id_card, setIdCard] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [picture, setPicture] = useState();
    const [adresse, setAdresse] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [email, setEmail] = useState();

    const [owner, setOwner] = useState("Client");
    const handleChange = (event) => {
        setOwner(event.target.value);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenErr(false);
    };

    const history = useHistory("");
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            history.push('/addRestaurant')
        }
    })

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false
    });
    const handleChangePass = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [test,setTest]=useState();
    const RegisterUser = async () => {
<<<<<<< HEAD
        console.log(formik.values);
        console.log(selectedDate.toLocaleDateString());
        
=======
        console.log(test);
        console.log("hadi default date ",selectedDate.toLocaleDateString());
        //const y =selectedDate.replace("/","-");
        const y =selectedDate.toLocaleDateString().replace(/\//g, "-");

        console.log(y);
>>>>>>> c9339d0b35bcc588061a9785858c4bae904000cd
        formData.append('id_card', id_card);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('picture', picture);
        formData.append('adresse', adresse);
<<<<<<< HEAD
        formData.append('date_of_birth', selectedDate.toLocaleDateString());
=======
        formData.append('date_of_birth', y);
>>>>>>> c9339d0b35bcc588061a9785858c4bae904000cd
        formData.append('phone_number', phone_number);
        formData.append('email', email);
        formData.append('password', values.password);
        formData.append('owner', owner);

        axios.post('http://localhost:8000/api/register', formData)
            .then(res => {
                console.log(res)
                localStorage.setItem("user-informations", JSON.stringify(res));
                history.push('/addRestaurant');
            })
            .catch(err => console.log(err))

    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('01-01-2003'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const validationSchema = Yup.object({
        id_card: Yup
            .number('Enter your ID CARD')
            .max(99999999, 'Too Long!')
            .required('ID CARD is required'),
        password: Yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            id_card: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <Header />
            <div className="container text-center">
                <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        This is an error message!
                    </Alert>
                </Snackbar>
                <div>
                    <h1>Sign Up</h1>
                    <input type="date" onChange={(e)=>setTest(e.target.value)} />
                    <form>
                        <div className="row">
                            <div className="col-12 mt-3">
                            <TextField id="outlined-basic-id" label="ID Card" variant="outlined" className="ml-auto w-25" onChange={(e) => setIdCard(e.target.value)} />
                                {/* <TextField
                                id="id_card"
                                name="id_card"
                                label="ID CARD"
                                value={formik.values.id_card}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.id_card && Boolean(formik.errors.id_card)}
                                helperText={formik.touched.id_card && formik.errors.id_card}
                                variant="outlined"
                                className="ml-auto w-25"
                                onChange={(e) => setIdCard(e.target.value)} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                <TextField id="outlined-basic-first-name" label="First Name" variant="outlined" className="ml-auto w-50" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="col-6 mt-3">
                                <TextField id="outlined-basic-last-name" label="Last Name" variant="outlined" className="ml-auto w-50" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                <label className="profilePic" >Profile picture</label>
                                <div className="borderInput"><input id="multiple_input_group" type="file" onChange={(e) => setPicture(e.target.files[0])} /></div>
                            </div>
                            <div className="col-6 mt-3">
                                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                    <Grid container justify="space-around" >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date of Birth"
                                            format="dd/MM/yyyy"
                                            className="w-50"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                <TextField id="outlined-basic-adresse" label="Adresse" variant="outlined" className="ml-auto w-50" onChange={(e) => setAdresse(e.target.value)} />
                            </div>

                            <div className="col-6 mt-3">
                                <TextField id="outlined-basic-phone-number" label="Phone Number" variant="outlined" className="mr-auto w-50" onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                <TextField id="outlined-basic-email" label="Email" variant="outlined" className="ml-auto w-50" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-6 mt-3">
                                <FormControl className="" variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChangePass('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                                {/* <TextField id="outlined-basic" label="Password" variant="outlined" className="mr-auto w-50" onChange={(e) => setPassword(e.target.value)} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend"> Choose option </FormLabel>
                                    <RadioGroup aria-label="owner" name="owner" value={owner} onChange={handleChange}>
                                        <FormControlLabel value="Client" control={<Radio color="primary" />} label="Client" />
                                        <FormControlLabel value="Owner" control={<Radio color="secondary" />} label="Restaurant Owner" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <br />
                        <Button color="primary" onClick={() => RegisterUser()}>Sign up</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register