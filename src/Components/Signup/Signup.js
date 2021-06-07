import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import register from "../../assets/register_pic.svg";
import './Signup.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, TextField, Button } from '@material-ui/core';

import * as Yup from 'yup';
import { useFormik } from "formik";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Signup = () => {
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object({
        id_card: Yup
            .string()
            .required('ID Card is required')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(8, 'Must be exactly 8 digits')
            .max(8, 'Must be exactly 8 digits'),

        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must contain 8 characters,one character, one number and one special case character"
            ),
    });
    const formik = useFormik({
        initialValues: {
            id_card: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            //console.log(values);
        },
    });

    const [openErr, setOpenErr] = useState(false);
    const handleClose = () => {
        setOpenErr(false);
    };
    const history = useHistory("");
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            history.push('/home')
        }
    })
    const signUpRequest = async () => {
        if (!formik.isValid) {
            setOpenErr(true);
        } else {
            axios.post('http://localhost:8000/api/register', formik.values)
                .then(res => {
                    console.log(res);
                    if (res.data.error) {
                        history.push('/signup');
                        localStorage.clear();
                        setOpenErr(true);
                    } else {
                        localStorage.setItem("user-informations", JSON.stringify(res));
                        history.push('/home');
                    }
                })
        }
    }
    return (
        <div>
            <Header />
            <section className="sectionLogin">
                <div className="container">
                    <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Error
                        </Alert>
                    </Snackbar>
                    <div className="pos-login">
                        <div className="login-content">
                            <form className="formRegister">
                                <img src={register} alt="register" />
                                <h2 className="title">Sign Up</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <FontAwesomeIcon icon='id-card' className="icons" />
                                    </div>
                                    <div className="div">
                                        <TextField
                                            autoComplete="off"
                                            className="input"
                                            id="id_card"
                                            name="id_card"
                                            label="ID Card"
                                            value={formik.values.id_card}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.id_card && Boolean(formik.errors.id_card)}
                                            helperText={formik.touched.id_card && formik.errors.id_card}
                                            inputProps={{
                                                style: { color: 'white' },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="input-div one">
                                    <div className="i">
                                        <FontAwesomeIcon icon='envelope' className="icons" />
                                    </div>
                                    <div className="div">
                                        <TextField
                                            autoComplete="off"
                                            className="input"
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            inputProps={{
                                                style: { color: 'white' },
                                            }}
                                        />
                                        {/* <input type="text" class="input" /> */}
                                    </div>
                                </div>
                                <div className="input-div">
                                    <div className="i">
                                        <FontAwesomeIcon icon='lock' className="icons" />
                                    </div>
                                    <div class="div pass">
                                        {/* <input type="password" className="input" /> */}
                                        <TextField
                                            className="passTextField"

                                            id="password"
                                            name="password"
                                            label="Password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                            type={showPassword ? "text" : "password"}
                                            InputProps={{
                                                style: { color: 'white' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </div>
                                </div>
                                <Button color="primary" className="btn-login margin-btn" onClick={signUpRequest}>Sign Up</Button>
                                {/* <input type="submit" className="btn-register btn-login margin-btn" value="Sign Up" /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Signup