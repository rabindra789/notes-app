// homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes App",
        description: "Open source notes app"
    }

    res.render("index", {locals, layout: "../views/layouts/front-page"})
}


exports.about = async (req, res) => {
    const locals = {
        title: "About - Notes App",
        description: "Open source notes app"
    }

    res.render("about", locals)
}

