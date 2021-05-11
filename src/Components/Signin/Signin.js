import React, { useState } from 'react'
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

/* import Particles from 'react-particles-js'; */
const Signin = () => {
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showPassword, setShowPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true)

    return (
        <>
            <Header />
            <section className="sectionLogin">
                <div className="container">
                    <div className="pos-login">
                        <div className="login-content">
                            <form className="formLogin">
                                <img src={avatar} alt="avatar" />
                                <h2 className="title">Sign in</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <FontAwesomeIcon icon='user' className="icons" />
                                    </div>
                                    <div className="div">
                                        <TextField
                                            className="input"
                                            /*  className="mr-4" */
                                            id="standard-basic"
                                            label="Email"
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
                                            id="standard-basic"
                                            label="Password"
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
                                <Button color="primary" className="btn-login" type="submit" disabled={buttonDisabled} >Sign In</Button>
                                {/* <input type="submit" className="btn-login" disabled={buttonDisabled} value="Login" /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section >
                <div className="main_login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="login-content pt-3">
                                    <div className="form_login">
                                        <img src={avatar} alt="avatar" className="img-fluid mt-3"/>
                                        <h2 className="title_signin">Sign in</h2>
                                        <div className="input-div one">
                                            <div className="i">
                                                <FontAwesomeIcon icon='user' className="icons" />
                                            </div>
                                            <div className="div">
                                  
                                                <TextField
                                                className="mr-4"
                                                    id="standard-basic"
                                                    label="Email"
                                                    inputProps={{
                                                        style: { color: 'white' },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="input-div pass">
                                            <div className="i">
                                                <FontAwesomeIcon icon='lock' className="icons" />
                                            </div>
                                            <div class="div">
                                                <TextField
                                                className="ml-4"
                                                    id="standard-basic"
                                                    label="Password"
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
                        
                                        <input type="submit" class="btn_login" value="Login" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
            {/* <section>

                <div className="main_login">
                    <div className="container">
                        <div className="row no-gutter ">

                            <div className="col-md-6 d-none d-md-flex bg-image"></div>

                            <div className="col-md-6 bg-light bg_particles">

                                <div className="login d-flex align-items-center py-5">
                                    <Particles className="particles_login"
                                        params={{
                                            "particles": {
                                                "number": {
                                                    "value": 7
                                                },
                                                "size": {
                                                    "value": 3
                                                }
                                            }
                                          
                                        }} />
                                    <div className="container form_group">
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                <h3 className="display-4 text-white">Sign In</h3>
                                                <form>
                                                    <div className="form-group mb-3">
                                                        <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                    </div>
                                                    <div className="custom-control custom-checkbox mb-3">
                                                        <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                        <label for="customCheck1" className="custom-control-label">Remember password</label>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         */}
        </>
    )
}
export default Signin;