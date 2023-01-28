import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralHomePage from "./GeneralHomePage";
import LoginPage from "./LoginPage";
import UserHomePage from "./UserHomePage";
import Goa from "./Goa.js";
import Delhi from "./Delhi.js";
import Manali from "./Manali.js";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<GeneralHomePage />} />
                <Route path="/home" element={<GeneralHomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user/home" element={<UserHomePage />} />
                <Route path="/user/Goa" element={<Goa />} />
                <Route path="/user/Delhi" element={<Delhi />} />
                <Route path="/user/Manali" element={<Manali />} />
            </Routes>
        </BrowserRouter>
    )
};
const appDiv = document.getElementById("app");
render(
    <App />
    , appDiv)
export default App;
