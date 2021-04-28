import Header from "../Header/Header";

import { Button } from '@material-ui/core';
import { useState } from "react";
const SearchRestaurant = () => {


    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const onClickSearch = async () => {
        /* res=axios.post('http://localhost:8000/api/search/'+ formik)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        */
        console.log(search);
        let res = await fetch('http://localhost:8000/api/search/' + search);
        res = await res.json();
        console.log(res);
        setData(res);

    }
    return (
        <>
            <Header />
            <div className='container'>
                <div className='col-12'>
                    {/* <form onSubmit={formik.handleSubmit} className='text-center'> */}
                    <h1>Search</h1>
                    <div className='pt-3'>
                        <div className="m-auto">
                            <input name="search" type="text" className="form-control m-auto" onBlur={(e) => setSearch(e.target.value)} />
                        </div>
                        {/* <TextField
                                id="search"
                                name="search"
                                label="Search"
                                value={formik.values.search}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.search && Boolean(formik.errors.search)}
                                helperText={formik.touched.search && formik.errors.search}
                                variant="outlined"
                                className="ml-auto w-25"
                            /> */}
                    </div>

                    <div className='pt-3'>
                        <Button color="primary" type="submit" onClick={onClickSearch}>Search</Button>

                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>restaurant name</th>
                                <th>description</th>
                                <th>image</th>
                                <th>services</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) =>
                                    <tr key={item.id.toString()}>
                                        <td>{item.restaurant_name}</td>
                                        <td >{item.description}</td>
                                        <td > <img src={"http://127.0.0.1:8000/storage/" + item.picture} alt="restPic" /></td>
                                        <td >{item.state}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                    {/*  </form> */}

                </div>

            </div>
        </>
    );
}

export default SearchRestaurant