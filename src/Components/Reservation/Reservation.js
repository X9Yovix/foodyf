import Header from '../Header/Header';
function Reservation() {
    return (
        <>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hero__text">
                            <div class="section-title">
                                <h2>Discover The Best Services Near You</h2>
                            </div>
                            <div class="hero__search__form">

                                <input type="date" />
                                <input type="number" />
                                <input type="text" placeholder="location" />
                                <input name="" id="" className="btn btn-primary" type="button" value="Search" />
                                {/* <div class="select__option">
                                            <select>
                                                <option value="">Find your table</option>
                                            </select>
                                        </div> */}
                                {/* <div class="select__option">
                                            <select>
                                                <option value="">Choose Location</option>
                                            </select>
                                        </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Reservation