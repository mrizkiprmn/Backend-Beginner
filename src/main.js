const express = require("express");
const routes = express.Router();
const product = require("./Routes/product");
const category = require("./Routes/category");
const history = require("./Routes/history");

routes.use("/product", product);
routes.use("/category", category);
routes.use("/history", history);

module.exports = routes;
