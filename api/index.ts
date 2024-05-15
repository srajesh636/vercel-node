const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
    const validationToken = req.query.validationToken;
    res.set('Content-Type', 'text/plain');
    res.status(200).send(validationToken);
});

app.post('/webhook', (req, res) => {
    console.log("data",req.body)
    res.status(200)
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
