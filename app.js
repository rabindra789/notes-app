require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file
app.use(express.static("public"));

// templateing engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const locals = {
        title: "Node js Notes",
        description: "Free Nodejs notes app "
    }
  res.render("index", locals);
});

app.listen(PORT, () => console.log(`App listen in PORT ${PORT}`));


// TODO: continue app making