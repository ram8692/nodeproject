const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");

//app.use(express.static());

const static_path = path.join(__dirname,"../public");

const templatepath = path.join(__dirname, "../review/views");
const partialspath = path.join(__dirname, "../review/partials");
hbs.registerPartials(partialspath)
app.set("view engine","hbs");
app.set("views", templatepath);
app.use(express.static(static_path)); 


// app.get("", (req, res) => {
//     res.send("welcome to KNOW FACTOR");
// })

app.get("", (req, res) => {
    res.render("index");
})

// app.get("/about", (req, res) => {
//     res.send("welcome to KNOW FACTOR about");
// })

 app.get("/about", (req, res) => {
     res.render("about");
 })

// app.get("/weather", (req, res) => {
//     res.send("welcome to KNOW FACTOR weather");
// })

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404",{
        error:"page not found"
    });
})

app.listen(port, () => {
    console.log("listening to the port at " + port);
});
