const Joi = require("joi")

// register user validation
const validateAdduser = new Joi.object({
    name: Joi.string().min(10).required().max(20),
    email: Joi.string().min(12).required().max(40).email().required(),
    password: Joi.string().min(8).max(50).required(),

});

module.exports = { validateAdduser };