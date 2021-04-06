
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'
import "./header.css"
const Header = () => {
    let user = JSON.parse(localStorage.getItem('user-informations'));
    console.warn(user);

    const history = useHistory()
    function logout() {
        localStorage.clear();
        history.push('/login');
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Foody</Navbar.Brand>
                <Nav className="ml-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-informations') ?
                            <>
                                <Link to="/AddRestaurant" className="nav-link">Add Restaurant</Link>
                            </>
                            :
                            <>
                                <Link to="/Login" className="nav-link">Login</Link>
                                <Link to="/Register" className="nav-link">Register</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-informations') ?
                        <Nav className="ml-auto navbar_wrapper">
                            <NavDropdown title={user && user.first_name} id="basic-nav-dropdown">
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item >Another action</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }
            </Navbar>
        </>
    );
}

export default Header