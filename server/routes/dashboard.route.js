const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middlewares/checkAuth.js");
const dashboardController = require("../controllers/dashboard.controller.js");

router.get("/dashboard",isLoggedIn, dashboardController.dashboard);
router.get("/dashboard/item/:id",isLoggedIn, dashboardController.dashboardViewNote);
router.put("/dashboard/item/:id",isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete("/dashboard/item-delete/:id",isLoggedIn, dashboardController.dashboardDeleteNote);
router.get("/dashboard/add",isLoggedIn, dashboardController.dashboardAddNote);
router.post("/dashboard/add",isLoggedIn, dashboardController.dashboardAddNoteSubmit);
router.get("/profile", isLoggedIn, dashboardController.userProfile)

module.exports = router