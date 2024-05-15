const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
    const validationToken = req.query.validationToken;
    res.set('Content-Type', 'text/plain');
    res.status(200).send(validationToken);
});

app.post('/webhook', (req, res) => {
    console.log(req)
    const validationToken = req.query.validationToken;
    if(validationToken){
        res.set('Content-Type', 'text/plain');
        return res.status(200).send(validationToken);
    }
    if(req.body){
        console.log(req.body)
        return res.status(200)
    }
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
