const express = require("express");
const routes = express.Router();
const product = require("./Routes/product");
const category = require("./Routes/category");


routes.use("/product", product);
routes.use("/category", category);


module.exports = routes;