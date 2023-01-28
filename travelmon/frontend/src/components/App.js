import { CssBaseline } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralHomePage from "./GeneralHomePage";
import LoginPage from "./LoginPage";
import UserHomePage from "./UserHomePage";
const App = () => {
    return (
        <CssBaseline>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<GeneralHomePage />} />
                    <Route path="/home" element={<GeneralHomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/user/home" element={<UserHomePage />} />
                </Routes>
            </BrowserRouter>
        </CssBaseline>
    )
};
const appDiv = document.getElementById("app");
render(
    <CssBaseline>
        <App />
    </CssBaseline>, appDiv)
export default App;
