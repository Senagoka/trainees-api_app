const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const {validateAdduser } = require("../validations/uservalidation");

const addUser = async (req, res) => {
  // validate user
  const { error } = validateAdduser.validate(req.body);
 if (error) return res.status(403).send(error.details[0].message);
  
  // complexity level and hashing using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

// find user from db
  const emailFound = await User.findOne({ email: req.body.email });
  if (emailFound) return res.status(404).send("email already exit");

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json(newUser)
};
// add user login
const userlogin = async (req, res) => {
  // user varification
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(404).send("account not found")
// password verification
  const varifiedPassword = await bcrypt.compare(req.body.password, user.password)
  if (!varifiedPassword) return res.status(404).send("email or password invalid");

  // assign a token
  consttoken_id = jwt.sign({ _id: user_id }, process.env.SCERTE_CODE,{expireIn:"30d"})
  res.headers("authorization", token_id).send(token_id)


  res.json({user})
};
module.exports = { addUser, userlogin };
