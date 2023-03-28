const express = require('express');
const path = require("path");
const app = express();
const fs = require('fs');


app.get('/', function (req, res) {
    
    fs.readFile('./src/ex3.html', null, (err, data) => {
    res.write(data)
    })
});

app.use(express.static(path.join(__dirname+"/src")));
app.listen(3000, () => {
    console.log("Server run on http://localhost:3000");
});