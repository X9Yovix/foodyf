import React from 'react';
import { Table } from 'react-bootstrap';
/* import { Paper, Grid, Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'; */
/* import './RestaurantPage.css'; */
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const pageVariant = {
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: "-100%",
    }
};
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};
function RestaurantPage() {
    <>
        <section>
            <motion.div variants={pageVariant} transition={pageTransition} exit="out" animate="in" initial="out">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </motion.div>
        </section>

    </>
}

export default RestaurantPage