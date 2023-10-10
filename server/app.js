const express = require("express");
const bodyParser = require("body-parser");


const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
const form = require("./routes/formRoutes");

app.use("/api/v1", form);


// error middleware
app.use(errorMiddleware);

module.exports = app;
