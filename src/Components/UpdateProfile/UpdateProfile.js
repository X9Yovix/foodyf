import * as React from 'react';
import Header from '../Header/Header';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import './UpdateRestaurant.css';

function UpdateRestaurant() {

    return (
        <>
            <Header />
            <section className="sectionUPP">
                <div className="pos-upp">
                    <div className="upp-content" style={{ padding: 15, margin: 'auto', maxWidth: 600 }}>
                        <div className="upr-form">
                            <form noValidate className="">
                                <Paper style={{ padding: 16 }}>
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField id="filled-basic" label="ID Card" variant="filled" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField id="filled-basic" label="First Name" variant="filled" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="filled-basic" label="Last Name" variant="filled" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="filled-basic" label="Last Name" variant="filled" />
                                        </Grid>
                                        <Grid item xs={12}>
                                          
                                        </Grid>
                                        {/* <Grid item>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Best Stooge</FormLabel>
                                    <RadioGroup row>
                                        <FormControlLabel
                                            label="Larry"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="larry"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Moe"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="moe"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Curly"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="curly"
                                                />
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                             */}
                                        {/* <Grid item xs={12}>
                                <TextField id="filled-basic" label="Filled" variant="filled" />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    name="city"
                                    component={Select}
                                    label="Select a City"
                                    formControlProps={{ fullWidth: true }}
                                >
                                    <MenuItem value="London">London</MenuItem>
                                    <MenuItem value="Paris">Paris</MenuItem>
                                    <MenuItem value="Budapest">
                                        A city with a very long Name
                    </MenuItem>
                                </Field>
                            </Grid> */}
                                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid item xs={6}>
                                    <Field
                                        name="rendez-vous"
                                        component={DatePickerWrapper}
                                        fullWidth
                                        margin="normal"
                                        label="Rendez-vous"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="alarm"
                                        component={TimePickerWrapper}
                                        fullWidth
                                        margin="normal"
                                        label="Alarm"
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                             */}
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                type="button"
                                                variant="contained"

                                            >
                                                Reset
                  </Button>
                                        </Grid>
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"

                                            >
                                                Submit
                  </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default UpdateRestaurant