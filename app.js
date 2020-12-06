require("dotenv/config");
const express = require("express");
const server = express();
const routes = require('./src/main');
const db = require('./src/Configs/db');
const bodyPars = require("body-parser");
const morgan = require("morgan");

server.use(bodyPars.urlencoded({extended: false}));
server.use(bodyPars.json());
server.use(morgan("dev"));
server.use(routes);

db.connect()
    .then((res) => {
        console.log("Database Connect");
})
    .catch((err)=> {
        console.log("Database not Connected");
        console.log(err)
})




server.listen(8888, () => {
    console.log("Service running on port 8888");
});
