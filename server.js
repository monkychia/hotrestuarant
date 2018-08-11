// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = 
[
    {
        id: "testID",
        name: 'name',
        phone: '555-555-1212',
        email: 'blah@blah.com'
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Get all reservations
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.post("/api/reservation", function(req, res) {
    var newReserve = req.body;
    console.log(newReserve);
    reservations.push(newReserve);
    res.json(newReserve);
});

app.delete("/api/clear", function(req, res) {
    reservations=[];
    return res.json(reservations);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  