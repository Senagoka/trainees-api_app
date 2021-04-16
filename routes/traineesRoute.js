const express = require("express");

const {
  createTrainee,
  getAllTrainees, getAtrainee, updateAtrainee, deleteAtrainee
} = require("../controllers/traineesController");
const protect =require("../middlewares/authMiddleware")

const router = express.Router();

router.route("/").post(protect, createTrainee).get(getAllTrainees);
router.route("/:_id").get(getAtrainee).put(protect, updateAtrainee).delete(protect, deleteAtrainee)

module.exports = router;
