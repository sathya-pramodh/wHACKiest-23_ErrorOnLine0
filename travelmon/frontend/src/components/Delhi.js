import { Card, CardMedia, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import UserNavigationBar from "./UserNavigationBar";
import axios from "axios";
const Delhi = () => {
    const [suggestionList, setSuggestionList] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/get-all-suggestions",
        }).then((request) => {
            const goaSuggestions = request.data[0].all_suggestions['Delhi'];
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
                Delhi
            </Typography>
            <Grid align="center">
                <Grid item>
                    <img src="static/images/Delhi.jpg" width="194" alt="Delhi Image" />
                    <Typography padding={5} align="center">
                        Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank, Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions.
                    </Typography>
                </Grid >
            </Grid>
            <Typography component="h6" variant="h6" align="center">
                Current weather: Summer
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
export default Delhi;
