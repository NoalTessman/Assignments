import React from "react";
import ReactDong from "react-dom";
import App from "./App.js"
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDong.render(  
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));