import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"


const ProtectedR = (props) => {
    let Cmp = props.Cmp;

    const history = useHistory("");

    useEffect(() => {
        if (!localStorage.getItem('restaurant-created')) {
            
            history.push('/addRestaurant');
            window.location.reload(false)
        }
    })

    return (
        <div>
            <Cmp />
        </div>
    );
}

export default ProtectedR