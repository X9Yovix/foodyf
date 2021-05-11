import React from 'react';
/* import './RegisterJdid.css'; */
import Header from "../Header/Header";
import register from "../../assets/register_pic.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegisterJdid = () => {

    return (
        <>
            <Header />
            <div className="main_register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-content pt-3">
                                <div className="form_register">
                                    <img src={register} alt="avatar" />
                                    <h2 className="title">Sign Up</h2>
                                    <div className="input-div cin">
                                        <div className="i">
                                            <FontAwesomeIcon icon='id-card' className="icons" />
                                        </div>
                                        <div className="div">
                                            <input type="text" className="input" placeholder="ID Card" />
                                        </div>
                                    </div>
                                    <div className="input-div one">
                                        <div className="i">
                                            <FontAwesomeIcon icon='envelope' className="icons" />
                                        </div>
                                        <div className="div">
                                            <input type="text" className="input" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="input-div pass">
                                        <div className="i">
                                            <FontAwesomeIcon icon='lock' className="icons" />
                                        </div>
                                        <div class="div">
                                            <input type="password" className="input" placeholder="Password" />
                                        </div>
                                    </div>
                                    <input type="submit" class="btn_register" value="Register" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RegisterJdid