const express = require("express")
const router = express.Router()
const {isLoggedIn} = require("../middlewares/checkAuth.js")
const dashboardController = require("../controllers/dashboard.controller.js")

router.get("/dashboard",isLoggedIn, dashboardController.dashboard)

module.exports = router