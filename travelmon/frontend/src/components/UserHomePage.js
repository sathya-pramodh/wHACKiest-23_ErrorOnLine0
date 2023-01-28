import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import UserNavigationBar from "./UserNavigationBar.js";
import { CardMedia, CssBaseline, Grid, Typography } from '@mui/material';
import axios from "axios";

export default function UserHomePage() {
    const [locationList, setLocationList] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/get-locations",
        }).then((response) => {
            let list = [];
            for (const location of response.data)
                list = [...list, location.name];
            setLocationList(list);
        })
    }, []);
    return (
        <CssBaseline>
            <UserNavigationBar />
            <CssBaseline />
            <Typography container="h4" variant="h4" align="center" padding={5}>
                Select the location of your trip!
            </Typography>
            <Grid container alignItems="center" justifyContent="center">
                {locationList.map((location) => {
                    return (
                        <Grid item>
                            <Card sx={{ minWidth: 275 }} align="center">
                                <CardMedia component="img" height="194" src={"static/images/" + location.split(" ")[0] + ".jpg"} />
                                <CardContent>
                                    <Typography component="p" variant="p">{location}</Typography>
                                    <CardActions>
                                        <Button type="submit" size="small" href={"/user/" + location}>Learn More</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>)
                })
                }
            </Grid>
        </CssBaseline>
    );
}
