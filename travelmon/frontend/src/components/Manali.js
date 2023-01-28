import { Card, CardMedia, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import UserNavigationBar from "./UserNavigationBar";
import axios from "axios";
const Goa = () => {
    const [suggestionList, setSuggestionList] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/get-all-suggestions",
        }).then((request) => {
            const goaSuggestions = request.data[0].all_suggestions['Manali'];
            if (!goaSuggestions)
                return;
            let list = [];
            for (const suggestion of goaSuggestions)
                list = [...list, suggestion];
            setSuggestionList(list);
        })
    }, [])

    return (
        <CssBaseline>
            <UserNavigationBar />
            <Typography component="h4" variant="h4" align="center">
                Manali
            </Typography>
            <Grid align="center">
                <Grid item>
                    <img src="static/images/Manali.jpg" width="194" alt="Manali Image" />
                    <Typography padding={5} align="center">
                        Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River.
                    </Typography>
                </Grid >
            </Grid>
            <Typography component="h6" variant="h6" align="center">
                Current weather: Winter
            </Typography>
            <Typography component="h6" variant="h6" padding={5}>
                Suggestions for Clothing:
            </Typography>
            <Grid container alignItems="center" justifyContent="center" >
                {suggestionList.map((suggestion) => {
                    return (
                        <Grid item>
                            <Card sx={{ minWidth: 194 }}>
                                <CardMedia component="img" src={"static/images/" + suggestion.split(" ")[0] + ".jpg"} width="194" alt={suggestion + " Image"} />
                                <Typography>
                                    {suggestion}
                                </Typography>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </CssBaseline>
    )
}
export default Goa;
