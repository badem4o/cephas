module.exports = function getError(prop, schemaProp) {
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
};
