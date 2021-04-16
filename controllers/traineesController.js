const { json } = require("express");
const Trainee = require("../models/traineeSchema");

// adding a new trainee

const createTrainee = async (req, res) => {
  const newTrainee = new Trainee({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
    dob: req.body.dob,
  });

  await newTrainee.save();
  res.status(201).json(newTrainee);
};

// get all trainess
const getAllTrainees = async (req, res) => {
  const trainees = await Trainee.find();
  res.json(trainees);
};

// get a trainee
const getAtrainee = async (req, res) => {
  const trainee = await Trainee.findById(req.params._id);
  res.json(trainee);
};

// update a trainee
const updateAtrainee = async (req, res) => {
  const foundtrainee = await Trainee.findById(req.params._id);

  // destructuring
  // const {name, email, destination, dob } = req.body
  if (foundtrainee) {
    foundtrainee.name = req.body.name;
    foundtrainee.destination = req.body.destination;
    foundtrainee.email = req.body.email;
    foundtrainee.dob = req.body.dob;

    const updatedTrainee = await foundtrainee.save();
    res.json({ updatedTrainee });
  }
};

// delet A trainee
const deleteAtrainee = async (req, res) => {
  const foundtrainee = await Trainee.findById(req.params._id);
  if (foundtrainee) {
    foundtrainee.remove();
    res.json({ msg: `${foundtrainee.name} remove` });
  } else {
    res.status(404).json({ error: "trainee not found" });
  }
};



module.exports = {
  createTrainee,
  getAllTrainees,
  getAtrainee,
  updateAtrainee,
  deleteAtrainee,
};
