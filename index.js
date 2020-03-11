const getError = require("./lib/getErrors");

module.exports = function Schema(schema) {
  return function validate(obj) {
    const errors = {};
    let error = "";
    let anyErrors = false;
    for (let prop in schema) {
      if (schema.hasOwnProperty(prop) && obj.hasOwnProperty(prop)) {
        error = getError(obj[prop], schema[prop]);
        anyErrors = error || anyErrors;
        if (error) {
          errors[prop] = error;
        }
      }
    }
    if (anyErrors) {
      return errors;
    } else {
      return false;
    }
  };
};
