const Note = require("../models/note.model.js");
const mongoose = require("mongoose");

exports.dashboard = async (req, res, next) => {
  let perPage = 12;
  let page = parseInt(req.query.page) || 1;
  try {
    const notes = await Note.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
          createdAt: 1,
        },
      },
      { $sort: { createdAt: -1 } },
      { $skip: perPage * (page - 1) },
      { $limit: perPage },
    ]);

    const count = await Note.countDocuments({
      user: new mongoose.Types.ObjectId(req.user.id),
    });

    res.render("dashboard/index", {
      username: req.user.firstName,
      profileImage: req.user.profileImage,
      title: "Dashboard - Notes App",
      description: "Open source notes app",
      notes: notes,
      layout: "layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Server Error");
  }
};

exports.dashboardViewNote = async (req, res) => {
  const notes = await Note.findById({ _id: req.params.id })
    .where({ user: req.user.id })
    .lean();

  if (notes) {
    res.render("dashboard/view-notes", {
      noteID: req.params.id,
      notes,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("Something went wrong");
  }
};

exports.dashboardUpdateNote = async (req, res) => {
  try {
    await Note.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body }
    ).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardDeleteNote = async (req, res) => {
  try {
    await Note.deleteOne({
      _id: req.params.id,
    }).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardAddNote = async (req, res) => {
  res.render("dashboard/add", {
    layout: "../views/layouts/dashboard",
  });
};
exports.dashboardAddNoteSubmit = async (req, res) => {
  try {
    req.body.user = req.user.id;

    await Note.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.userProfile = async (req, res) => {
  const user = {
    name: req.user.firstName,
    lastName: req.user.lastName,
    profilePic: req.user.profileImage,
    layout: "../views/layouts/dashboard",
  };
  res.render("dashboard/profile", { user });
};
