import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App.js";

const ENDPOINT = "http://22ccc799.ngrok.io/";
const METHOD = "getpdata_dat?date=202003";

const URL = ENDPOINT + METHOD;

ReactDOM.render(<App url={URL} />, document.getElementById("root"));

// import WidgetApi from "./modules/WidgetApi.js";
