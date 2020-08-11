import getErrors from "./getErrors";

function cephas(schema) {
  return function validate(obj) {
    const errors = {};
    let error = "";
    let anyErrors = false;
    for (let prop in schema) {
      if (schema.hasOwnProperty(prop) && obj.hasOwnProperty(prop)) {
        error = getErrors(obj[prop], schema[prop]);
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
}

export default cephas;
