import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'
import './register.css'
const Register = () => {
    const [choose, setChoose] = useState("cin")

    const [cin, setCin] = useState("")
    const [carte_sejour, setCarteSejour] = useState("")
    const [first_name, setFirstName] = useState()
    const [last_name, setLastName] = useState("")
    const [picture, setPicture] = useState("")
    const [date_of_birth, setBirth] = useState("")
    const [adresse, setAdresse] = useState("")
    const [phone_number, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory("")

    //3rd step
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            history.push('/AddRestaurant')
        }
    })
    const RegisterUser = async () => {
        let items = { cin, carte_sejour, first_name, last_name, picture, adresse, date_of_birth, phone_number, email, password }
        console.warn(items);
        let res = await fetch(
            'http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }
        );
        res = await res.json();
        console.warn('resultat', res);

        localStorage.setItem('user-informations', JSON.stringify(res));
        history.push('/AddRestaurant');
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <h1>Sign Up</h1>
                    <button className="btn btn-warning mb-2 btnChooseCIN" onClick={() => setChoose("cin")}>ID Card</button>
                    <button className="btn btn-warning mb-2 btnChooseCS" onClick={() => setChoose("cs")}>Stay Card</button>
                    {
                        choose === "cin" &&
                        <input className="form-control m-auto" value={cin} onChange={(e) => setCin(e.target.value)} type="text" placeholder="ID Card " />
                    }

                    {
                        choose === "cs" &&
                        <input className="form-control m-auto" value={carte_sejour} onChange={(e) => setCarteSejour(e.target.value)} type="text" placeholder="Stay Card" />
                    }
                    <br />
                    <input className="form-control m-auto" value={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                    <br />
                    <input className="form-control m-auto" value={last_name} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    <br />
                    <input className="form-control m-auto" value={picture} onChange={(e) => setPicture(e.target.value)} type="file" />
                    <br />
                    <input className="form-control m-auto" value={date_of_birth} onChange={(e) => setBirth(e.target.value)} type="date" />
                    <br />
                    <input className="form-control m-auto" value={adresse} onChange={(e) => setAdresse(e.target.value)} type="text" placeholder="Adresse" />
                    <br />
                    <input className="form-control m-auto" value={phone_number} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number" />
                    <br />
                    <input className="form-control m-auto" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <br />
                    <input className="form-control m-auto" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <br />
                    <button className="btn btn-primary" onClick={RegisterUser}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register