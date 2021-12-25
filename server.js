var express = require('express');
var path = require('path');

var app = express();

const port = 3000;

app.use("/mfe/music", express.static(path.join(__dirname, "/music/build")));
app.use("/mfe/welcome", express.static(path.join(__dirname, "/welcome/dist")));
app.use("/", express.static(path.join(__dirname, "/bootstrap/dist")));

app.get((req, res) => {
    res.status(404);
    res.send("Page not found !");
})


app.listen(port, () => console.log(`Listening to port `, port));

