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

          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
