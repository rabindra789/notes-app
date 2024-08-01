const Note = require("../models/note.model.js");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
  try {
      const notes = await Note.find({});
      res.render('dashboard/index', {
          username: req.user.firstName, // Directly pass username
          title: "Dashboard - Notes App", // Optionally pass title and description
          description: "Open source notes app",
          notes: notes,
          layout: 'layouts/dashboard' // Ensure this path is correct
      });
  } catch (error) {
      console.error('Error fetching notes:', error);
      res.status(500).send('Server Error');
  }

}