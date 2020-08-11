'use strict';

function getError(prop, schemaProp) {
  let result = false;
  if (schemaProp.required) {
    if (!/\S/.test(prop)) {
      if (schemaProp.message) {
        return schemaProp.message;
      } else {
        throw new Error("Your schema needs to provide an error message");
      }
    }
  } else {
    throw new Error("Your schema needs to specify if a property is required");
  }
  if (schemaProp.match && typeof schemaProp.match === "function") {
    const matchFuncResult = schemaProp.match(prop);
    if (matchFuncResult !== true) {
      if (matchFuncResult) {
        return matchFuncResult;
      } else {
        if (schemaProp.message) {
          return schemaProp.message;
        } else {
          throw new Error("Your schema needs to provide an error message");
        }
      }
    }
  } else if (schemaProp.match && typeof schemaProp.match !== "function") {
    if (!prop.match(schemaProp.match)) {
      if (schemaProp.message) {
        return schemaProp.message;
      } else {
        throw new Error("Your schema needs to provide an error message");
      }
    }
  }
  return result;
}

function cephas(schema) {
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
}

module.exports = cephas;
