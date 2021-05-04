import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom"


const Protected = (props) =>{
    let Cmp=props.Cmp;
    
    const history=useHistory("");

    useEffect(() => {
        if((!localStorage.getItem('user-informations')) && (!localStorage.getItem('restaurant-created'))){
            history.push('/login');
        }
    })

    return (
        <div>
            <Cmp />
        </div>
    );
}

export default Protected