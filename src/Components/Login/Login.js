import Header from "../Header/Header"
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Button, TextField } from '@material-ui/core'
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ReCAPTCHA from "react-google-recaptcha";
import './Login.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment } from '@material-ui/core';
import Particles from 'react-particles-js';
const Login = () => {

    const history = useHistory("");
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            history.push('/home')
        }
    })

    const [openErr, setOpenErr] = useState(false);
    const handleClose = () => {
        setOpenErr(false);
    };

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const validationSchema = Yup.object({
        email: Yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Required'),
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

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showPassword, setShowPassword] = useState(false);

    const onClickLogin = async () => {
        axios.post('http://localhost:8000/api/login', formik.values)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    history.push('/login');
                    localStorage.clear();
                    setOpenErr(true);
                } else {
                    localStorage.setItem("user-informations", JSON.stringify(res));
                    history.push('/addRestaurant');
                }
            })
            .catch(err => {
                console.log(err)
                history.push('/login');
                localStorage.clear();
            })
    }
    return (
        <>
            <Header className="hnavbar" />
            <div className="holder">

                <div className='container formlogin'>
                    <Snackbar open={openErr} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Email/Password is is incorrect
                    </Alert>
                    </Snackbar>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit} className='text-center'>
                            <h1>Sign In</h1>
                            <div className='pt-3'>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    variant="outlined"
                                    className="ml-auto w-25"
                                />

                            </div>
                            <div className='pt-3'>

                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    variant="outlined"
                                    className="ml-auto w-25"
                                    type={showPassword ? "text" : "password"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    InputProps={{
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
                            <div className='pt-3 holderIframe'>
                                <ReCAPTCHA
                                    sitekey="6LeS-qYaAAAAAE6OE1zZxJ4F_mDiMb-1ASbZEAMh"
                                    onChange={() => setButtonDisabled(false)}
                                />
                            </div>
                            <div className='pt-3'>
                                <Button color="primary" type="submit" onClick={onClickLogin} disabled={buttonDisabled} >Sign In</Button>

                            </div>

                            <div className='text-center'>
                                <Button color="secondary" href="/register" >Sign Up</Button>
                            </div>
                        </form>

                    </div>
                </div>
                <Particles className="particlesss"
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            },
                            "color": {
                                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
            </div>

        </>
    );
}

export default Login