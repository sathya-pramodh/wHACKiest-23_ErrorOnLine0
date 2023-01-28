import * as React from 'react';
import GeneralNavigationBar from "./GeneralNavigationBar.js";
import { CssBaseline, Grid, Typography } from '@mui/material';

export default function GeneralHomePage() {
    return (
        <CssBaseline>
            <GeneralNavigationBar />
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Typography component="h2" variant="h2">
                    TravelMon!
                </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Typography component="p" variant="p" align="center">
                    TravelMon is your travel buddy.<br />
                    Click on the login button to see the magic!
                </Typography>
            </Grid>
        </CssBaseline>
    );
}
