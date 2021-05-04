/* import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import SaveIcon from '@material-ui/icons/Save'; */
/* const formData = new FormData(); */
/* function UpdateRestaurant() {
    const [datarest, setData] = useState([]);
    const [restaurant_name, setRestaurantName] = useState("");
    const [description, setDescription] = useState("");
    const [adresse, setAdresse] = useState("");
    let restName = (localStorage.getItem('restaurant-created'));
    //console.log(restName);
    useEffect(() => {
        getResId()
    }, []);
    
    const getResId = async () => {
        let res = await fetch('http://localhost:8000/api/getrestid/' + restName);
        res = await res.json();
        //console.log(res);
        //let x = JSON.parse(res.state);
        //console.log(x);
        setData(res);

    }
    console.log("test data",datarest);
    return (

        <div>
            <Header />
            <div className="container">
                <h2>Update Restaurant</h2>
                <button hidden >show restaurant </button>
                <form>
                    <div className="form-group">
                        {
                            datarest.map((item) =>
                                <div key={item.id}>

                                    <input type="text" name="restaurant name" className="" onChange={(e) => setRestaurantName(e.target.value)} value={item.restaurant_name} />
                                    <br />
                                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={item.description} />
                                    <br />
                                    <input type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} value={item.adresse} />
                                    <br />
                                    <br />
                                    <input type="checkbox" className="form-check-input" />
                                    <input type="checkbox" className="form-check-input" />
                                    <input type="checkbox" className="form-check-input" />
                                </div>
                            )
                        }
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className=""
                            startIcon={<SaveIcon />}
                        >Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
} */
function UpdateRestaurant() {}
export default UpdateRestaurant