import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import register from "../../assets/register_pic.svg";
import './SignUp.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@material-ui/core'
import { IconButton, InputAdornment } from '@material-ui/core';

const SignUp = () => {
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <Header />
            <section className="sectionLogin">
                <div className="container">
                    <div className="pos-login">
                        <div className="login-content">
                            <form className="formLogin">
                                <img src={register} alt="register" />
                                <h2 className="title">Sign Up</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <FontAwesomeIcon icon='id-card' className="icons" />
                                    </div>
                                    <div className="div">
                                        <TextField
                                            className="input"
                                            id="standard-basic"
                                            label="CIN"
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

                                <input type="submit" className="btn-register" value="Sign Up" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default SignUp