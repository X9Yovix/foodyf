import React from "react";
import foodyLogo from "../../assets/logo.png";
import  "./Logo.css";
const Logo = () => {
    return(
        <div>
            <img width="200px" height="auto" className='img-fluid styleLogo' src={foodyLogo}  alt="logo" />
        </div>
    );
}
export default Logo