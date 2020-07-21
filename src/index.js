import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App.js";

const ENDPOINT = "http://405fcb67abc5.ngrok.io/";
const PAGE_METHOD = "getpdata_dat?date=202005&views=1000&device=all";
const WIDGET_METHOD = "gewdata_test?date=202005";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTUxMDI4NzMsIm5iZiI6MTU5NTEwMjg3MywianRpIjoiYjgwYmY0MmQtMTAyOS00MGYzLWE5MDMtMWM4OTEzMzc5NTU4IiwiZXhwIjoxNjAyODc4ODczLCJpZGVudGl0eSI6ImFkbWluIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.eCRIRtwFuh0pc_g94aqAk9ZHbENLwzhOiQUE7tugSkM";

// https://42479292c7d3.ngrok.io/getpdata_dat?date=202005&views=1000&device=all

const PAGES_URL = ENDPOINT + PAGE_METHOD;
const WIDGET_URL = ENDPOINT + WIDGET_METHOD;

ReactDOM.render(
  <App
    pagesUrl={PAGES_URL}
    widgetUrl={WIDGET_URL}
    accessToken={ACCESS_TOKEN}
  />,
  document.getElementById("root")
);

// import WidgetApi from "./modules/WidgetApi.js";
