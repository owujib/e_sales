const Joi = require('joi');
const JOI = require('joi');
const AppError = require('./ApiError');

/**
 * @param {object} data is the request body coming the request object
 * return a validation object
 */

exports.loginValidation = (data) => {
  const schema = JOI.object({
    email: JOI.string().required().email(),
    password: JOI.string().required().min(8).max(20),
  });
  return schema.validate(data);
};

/**
 * @param {object} data is the request body coming the request object
 * return a validation object
 */
exports.registerValidation = (data) => {
  const schema = JOI.object({});
};
