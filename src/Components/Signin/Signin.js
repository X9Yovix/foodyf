import React, { useEffect, useState } from 'react'

/* import './stylelogin.css'; */
import './Signin.css';
import Header from "../Header/Header";
import avatar from "../../assets/avatar.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core'
import { IconButton, InputAdornment, Button } from '@material-ui/core';
import Footer from '../Footer/Footer';
import ReCAPTCHA from "react-google-recaptcha";
import CustomChatbot from '../chatbot/Config';

import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
/* import Particles from 'react-particles-js'; */
const Signin = () => {
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showPassword, setShowPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const validationSchema = Yup.object({
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
        },
    });

    const history = useHistory("");
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            //getData();
            history.push('/home')
        }
    })
    //const [dataUPR, setData] = useState([]);
    const [openErr, setOpenErr] = useState(false);
    const handleClose = () => {
        setOpenErr(false);
    };

    const signInRequest = async () => {
        console.log(formik.values);
        axios.post('http://localhost:8000/api/login', formik.values)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    history.push('/signin');
                    localStorage.clear();
                    setOpenErr(true);
                } else {
                    localStorage.setItem("user-informations", JSON.stringify(res));
                    var dataU = JSON.parse(localStorage.getItem('user-informations'));
                    console.log(dataU.data.id_card)
                    axios.get('http://localhost:8000/api/getrestidcard/' + dataU.data.id_card)
                        .then(res => {
                            localStorage.setItem("restaurant-created", JSON.stringify(res));
                        })
                    
                    history.push('/home');
                    window.location.reload(false);
                }
            })
    }
    return (
        <>
            <Header />
            <CustomChatbot />
            <section className="sectionLogin">
                <div className="container">
                    <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Email/Password is is incorrect
                        </Alert>
                    </Snackbar>
                    <div className="pos-login">
                        <div className="login-content">
                            <form className="formLogin">
                                <img src={avatar} alt="avatar" />
                                <h2 className="title">Sign in</h2>

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
                                    </div>
                                </div>
                                <div className="input-div">
                                    <div className="i">
                                        <FontAwesomeIcon icon='lock' className="icons" />
                                    </div>
                                    <div class="div pass">
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

                                <div className="input-div-captcha">
                                    <ReCAPTCHA
                                        className="g-recaptcha"
                                        sitekey="6LeS-qYaAAAAAE6OE1zZxJ4F_mDiMb-1ASbZEAMh"
                                        onChange={() => setButtonDisabled(false)}
                                    />
                                </div>

                                <Button color="primary" className="btn-login" onClick={signInRequest} disabled={buttonDisabled} >Sign In</Button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Signin;