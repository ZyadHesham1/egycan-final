//jshint esversion:6

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser());
app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {

    res.render("index", { pageTitle: "EgyCan" });
});

app.get("/about", (req, res) => {
    res.render("about", { pageTitle: "About EgyCan" });
});

app.get("/products", (req, res) => {
    res.render("products", { pageTitle: "EgyCan Products" });
});

app.get("/coating", (req, res) => {
    res.render("coating", { pageTitle: "EgyCan" });
});

app.get("/easy-open-ends", (req, res) => {
    res.render("easy-open-ends", { pageTitle: "EgyCan" });
});

app.get("/peel-off-lids", (req, res) => {
    res.render("peel-off-lids", { pageTitle: "About EgyCan" });
});

app.get("/sealing-compound", (req, res) => {
    res.render("sealing-compound", { pageTitle: "EgyCan" });
});

app.get("/twist-off-caps", (req, res) => {
    res.render("twist-off-caps", { pageTitle: "EgyCan" });
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

