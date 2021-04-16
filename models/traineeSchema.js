const mongoose = require("mongoose");

const traineeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    destination: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
    },
  },
  {
    timestaps: true,
  }
);

const Trainee = mongoose.model("Trainee", traineeSchema);

module.exports = Trainee;
