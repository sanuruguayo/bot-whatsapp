const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");

const app = express();

//import routings
const authRoutes = require("./router/auth");

//Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configure header HTTP - CORS
app.use(cors());

//Configure routings
app.use(`/api`)

module.exports = app;
