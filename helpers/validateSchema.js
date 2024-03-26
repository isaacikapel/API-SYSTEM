const Joi = require("joi");

const authSchema = Joi.object({
    regName: Joi.string().required(),
    regEmail: Joi.string().email().lowercase().required(),
    regPassword: Joi.string().min(6).required(),
});

module.exports = {authSchema};