import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import NavigationBar from "./NavigationBar.js";
import { CardMedia, Grid, Typography } from '@mui/material';
import axios from "axios";

export default function UserHomePage() {
    const [locationList, setLocationList] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/get-locations",
        }).then((response) => {
            console.log(response);
            let list = [];
            for (const location of response.data)
                list = [...list, location.name];
            setLocationList(list);
        })
    }, []);
    return (
        <div>
            <NavigationBar />
            <Grid container>
                {locationList.map((location) => {
                    return < Card sx={{ minWidth: 275 }
                    }>
                        <CardMedia component="img" height="194" image={"src/static/images/" + location + ".jpg"} />
                        <CardContent>
                            <Typography component="p" variant="p">{location}</Typography>
                            <CardActions>
                                <Button type="submit" size="small" href={"/user/" + location}>Learn More</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                })
                }
            </Grid>
        </div >
    );
}
