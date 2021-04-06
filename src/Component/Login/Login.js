import Header from "../Header/Header"
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import "./login.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory("")
    useEffect(() => {
        if (localStorage.getItem('user-informations')) {
            history.push('/AddRestaurant')
        }
    })

    //2 promises liwil call api thanya ta3diya mta3 items json
    const onClickLogin = async () => {
        console.warn(email, password)
        let items = { email, password }
        let res = await fetch(
            'http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }
        );
        res = await res.json();
        localStorage.setItem("user-informations",JSON.stringify(res))
        history.push('/AddRestaurant')
    }
    return (
        <>
            <Header />

            <div className="container">
                <div className="col-12">
                    <form className="text-center">
                        <h1>Sign In</h1>

                        <div className="pt-3">
                            <input className="form-control col-3 m-auto" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        </div>
                        <div className="pt-3">
                            <input className="form-control col-3 m-auto" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
                        </div>

                        <div className="pt-3">
                            <button className="btn btn-primary" onClick={onClickLogin}>Sign In</button>
                        </div>
                        <div className="text-center">
                            {/* <a className="txt2 hov1">Sign Up</a> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login