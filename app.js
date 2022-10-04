const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const server = app.listen(port, () => {

    console.log(`Express running on port ${server.address().port}`);
    })

    app.use(express.static(__dirname, { // host the whole directory
        extensions: ["html", "css", "gif", "png", "jpg"],
    }))
    
    app.get("/index", (req, res) => {
        res.sendFile(__dirname + "/index.html");
    })





