import { TextField } from '@material-ui/core';
import Header from '../Header/Header';
import './orderfood.css';
function OrderFood() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="">
                            <div className="">
                                <h2>Discover The Best Services Near You</h2>
                            </div>
                            <div className="">

                                <TextField name="order food" label="Order Food" />

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
export default OrderFood