const express = require("express");
const { addUser, userlogin } = require("../controllers/usercontrollers");


const router = express.Router();

router.route("/register").post(addUser);
router.route("/login").post(userlogin)

module.exports = router;
