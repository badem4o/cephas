var getError = require('./lib/getErrors')

module.exports = function Schema (schema) {
  return function validate (obj) {
    var errors = {}
    var error = ''
    var anyErrors = false
    for (var prop in schema) {
      if (schema.hasOwnProperty(prop) && obj.hasOwnProperty(prop)) {
        error = getError(obj[prop], schema[prop])
        anyErrors = error || anyErrors
        if (error) {
          errors[prop] = error
        }
      }
    }
    if (anyErrors) {
      return errors
    } else {
      return false
    }
  }
}
