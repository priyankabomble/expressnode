var express = require("express");
var app = express();
app.get('/go', (req, res) => {
    res.send("i am node i am here");
});
app.listen(4000, () => {
    console.log('App listening on port 3000!');
});