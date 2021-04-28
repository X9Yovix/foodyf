import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
        <div>
            <h1>Home</h1>
            <Link to="/orderfood" className='nav-link'>Order Food</Link>
            <Link to="/reservation" className='nav-link'>Reservation</Link>
        </div>
        </>
    );
}

export default Home