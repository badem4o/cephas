var getError = require('./lib/getErrors');

/*jshint latedef: false*/
module.exports = Schema;
/*jshint*/

function Schema(schema, opts) {
  if (!(this instanceof Schema)) {
    return new Schema(schema, opts);
  }
  this.schema = schema || {};
  this.opts   = opts || {};
}

Schema.prototype.validate = function validateSchema(obj) {
  var errors = {};
  var error = '';
  var anyErrors = false;
  for (var prop in this.schema) {
    if (this.schema.hasOwnProperty(prop)) {
      error = getError(obj[prop], this.schema[prop]);
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
