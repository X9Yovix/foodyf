import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import AddRestaurant from './Component/AddRestaurant/AddRestaurant'
import Protected from './Component/Protected/Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route path="/Login" component={Login} />
        <Route exact path="*">
          <Redirect to="/Login" />
        </Route>
        <Route path="/Register" component={Register} />

        <Route path="/AddRestaurant">
          <Protected Cmp={AddRestaurant} />
        </Route>


      </BrowserRouter>
    </div>
  );
}

export default App;
