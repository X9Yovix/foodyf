
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import "./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    let data = JSON.parse(localStorage.getItem('user-informations'));
    const history = useHistory()
    function logout() {
        localStorage.clear();
        history.push('/login');
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                
                <Nav className='ml-auto'>
                
                    <Link to="/search" className='nav-link'>Search</Link>
                    <Link to="/loginjdid" className='nav-link'>login jdid</Link>
                    
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
                    <ShoppingCartIcon color="primary" fontSize="large"/>
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
        </>
    );
}

export default Header