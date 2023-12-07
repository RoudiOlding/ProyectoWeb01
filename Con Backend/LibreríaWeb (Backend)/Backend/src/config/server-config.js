const express = require("express");
const cors = require("cors");

const configuration = express.Router();

configuration.use(express.json());
configuration.use(express.urlencoded({ extended: true }));

configuration.use(cors());
configuration.options("*", cors());

module.exports = configuration;