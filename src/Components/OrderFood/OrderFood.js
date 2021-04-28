import { TextField } from '@material-ui/core';
import Header from '../Header/Header';
import './style.css';
function OrderFood() {
    return (
        <>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="">
                            <div class="">
                                <h2>Discover The Best Services Near You</h2>
                            </div>
                            <div class="">

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