const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
    const validationToken = req.query.validationToken;
    res.status(200).send(validationToken);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
