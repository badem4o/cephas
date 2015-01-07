var cast = require('./cast');

module.exports = function getError(prop, schemaProp) {
  var result = false;
  if (schemaProp.required) {
    if (!/\S/.test(prop)) {
      return schemaProp.message;
    }
  } else {
    throw new Error('Your schema needs to specify if a property is required');
  }
  if (schemaProp.type) {
    prop = cast(prop);
    if (typeof prop !== schemaProp.type) {
      return schemaProp.message;
    }
  } else {
    throw new Error('Your chema needs to specify a type for each property');
  }
  if (schemaProp.match) {
    if (!prop.match(schemaProp.match)) {
      return schemaProp.message;
    }
  }
  return result;
};
