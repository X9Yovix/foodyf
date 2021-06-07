
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import defaultPic from "../../assets/Sample_User_Icon.png";

import "./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const linkStyle = {
        textDecoration: "none",
        color: '#0d98ba',
    };
    const buttonStyle = {
        margin: '0% 1%'
    };

    let data = JSON.parse(localStorage.getItem('user-informations'));

    //let dataRestaurant = JSON.parse(localStorage.getItem('restaurant-created'));
    const history = useHistory()
    function logout() {
        //localStorage.removeItem('user-informations');
        localStorage.clear();
        history.push('/home');
    }
    return (
        <div>
            <Navbar fixed="top" className="header_navbar" expand="lg">
                <Navbar.Brand ><Link to="/home"><Logo /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <FontAwesomeIcon icon="chevron-down" color="white" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav icons-navbar">
                    <Nav className='mr-auto'>
                        {/* <Link to="/search" className='nav-link'>Search</Link> */}
                        <Link to="/findrestaurant" className='nav-link'>Find Restaurant</Link>
                        {/* <Link to="/admin" className='nav-link'>Admin</Link> */}
                        {/* <Link to="/reservation" className='nav-link'>Reservation</Link> */}
                        <Link to="/contact" className='nav-link'>Contact</Link>
                        {/* <Link to="/fetchdata" className='nav-link'>fetch data</Link> */}
                        {/* <Link to="/restaurantpage" className='nav-link'>restaurant page</Link> */}


                        {
                            !localStorage.getItem('user-informations') &&

                            <>
                                {/* <Link to="/login" className='nav-link'>Login</Link>
                                <Link to="/register" className='nav-link' >Register</Link> */}
                            </>
                        }

                    </Nav>
                    <ShoppingCartIcon color="primary" fontSize="large" />

                    {
                        localStorage.getItem('user-informations') &&

                        <Nav className="pull-right ml-5">
                            <>
                                {!data.data.picture ?
                                    <img src={defaultPic} width="40" height="40" alt="profile" className="rounded-circle bg-white" />
                                    :
                                    <img src={"http://127.0.0.1:8000/storage/" + data.data.picture} width="40" height="40" alt="profile" className="rounded-circle" />

                                }
                            </>
                            {/* <NavDropdown title={data.data && data.data.first_name || "User" } id="basic-nav-dropdown"> */}
                            <NavDropdown title={data.data.first_name || "User"} id="basic-nav-dropdown">

                                {/* <NavDropdown.Item >Profile</NavDropdown.Item> */}
                                {/* <NavDropdown.Item >Settings</NavDropdown.Item> */}
                                {
                                    !localStorage.getItem('restaurant-created') && localStorage.getItem('user-informations') ?
                                        <NavDropdown.Item href="/addRestaurant">Add Restaurant</NavDropdown.Item>
                                        :
                                        <NavDropdown.Item href="/UpdateRestaurant" >Your Restaurant</NavDropdown.Item>
                                }

                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    }
                    {
                        !localStorage.getItem('user-informations') &&
                        <>
                            <Button style={buttonStyle} variant="outlined" color="primary" size="small" startIcon={<VpnKeyIcon />} to="/loginjdid" ><Link style={linkStyle} to="/signin" >Sign in</Link></Button>
                            <Button variant="outlined" color="primary" size="small" startIcon={<SupervisedUserCircleIcon />} ><Link style={linkStyle} to="/signup">Sign up</Link></Button>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
            {/* <Navbar bg="bg-transparent" className="header_navbar" expand="lg" >
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>

                <Nav className='ml-auto'>
                    <Link to="/search" className='nav-link'>Search</Link>
                    <Link to="/loginjdid" className='nav-link'>login jdid</Link>
                    <Link to="/registerjdid" className='nav-link'>register jdid</Link>
                    <Link to="/contact" className='nav-link'>Contact</Link>

                    {
                        !localStorage.getItem('restaurant-created') && localStorage.getItem('user-informations') &&
                        <Link to="/addRestaurant" className='nav-link'>Add Restaurant</Link>
                    }
                    {
                        !localStorage.getItem('user-informations') &&

                        <>
                            <Link to="/login" className='nav-link'>Login</Link>
                            <Link to="/register" className='nav-link' >Register</Link>
                        </>
                    }
                    <ShoppingCartIcon color="primary" fontSize="large" />
                </Nav>
                {
                    localStorage.getItem('user-informations') &&

                    <Nav className='ml-auto'>
                        <img src={"http://127.0.0.1:8000/storage/" + data.data.picture} width="40" height="40" alt="profile" className="rounded-circle" />
                        <NavDropdown title={data.data && data.data.first_name} id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item >Settings</NavDropdown.Item>
                            {
                                localStorage.getItem('restaurant-created') &&
                                <NavDropdown.Item href="/UpdateRestaurant">Your Restaurant</NavDropdown.Item>
                            }
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                }
            </Navbar>
 */}
        </div>
    );
}

export default Header