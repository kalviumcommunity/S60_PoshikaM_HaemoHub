const express = require("express");
const app = express();

app.get("/get", (request, response) => {
    response.send("I am get request.")
})

app.post("/post", (request, response) => {
    response.send("I am post request")
})

app.put("/put/:id", (request, response) => {
    response.send("I am put request")
})

app.delete("/delete/:id", (request, response) => {
    response.send("I am delete request")
})

module.exports = app;