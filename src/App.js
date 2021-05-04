import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AddRestaurant from './Components/AddRestaurant/AddRestaurant'
import Protected from './Components/Protected/Protected'
import OrderFood from './Components/OrderFood/OrderFood'
import SearchRestaurant from './Components/SearchRestaurant/SearchRestaurant';
import Reservation from './Components/Reservation/Reservation';
import UpdateRestaurant from './Components/UpdateRestaurant/UpdateRestaurant';
import LoginJdid from './Components/LoginJdid/LoginJdid';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/fontawesome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/login" component={Login} />
          {/* <Route exact path="*">
          <Redirect to="/home" />
        </Route> */}
          <Route path="/register" component={Register} />
          <Route path="/search" component={SearchRestaurant} />
          <Route path="/orderfood" component={OrderFood} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/addRestaurant">
            <Protected Cmp={AddRestaurant} />
          </Route>
          <Route path="/UpdateRestaurant" component={UpdateRestaurant} />
          <Route path="/contact" component={Contact} />
          <Route path="/loginjdid" component={LoginJdid} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
