const express = require("express");

const routes = express.Router();
const ctrl = require("../Controllers/product");


routes.get('/', ctrl.getAll);
routes.get('/:id', ctrl.get);
routes.post("/", ctrl.add);
routes.put("/", ctrl.update);
routes.delete("/:id", ctrl.del);

module.exports = routes;
