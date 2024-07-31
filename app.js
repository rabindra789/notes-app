require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");


app.use("/", require("./server/routes/index.route.js"))
app.use("/", require("./server/routes/dashboard.route.js"))

app.get("*", function (req, res) {
    res.status(404).render("404")
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))