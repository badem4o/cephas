module.exports = function getError (prop, schemaProp) {
  var result = false
  if (schemaProp.required) {
    if (!/\S/.test(prop)) {
      if (schemaProp.message) {
        return schemaProp.message
      } else {
        throw new Error('Your schema needs to provide an error message')
      }
    }
  } else {
    throw new Error('Your schema needs to specify if a property is required')
  }
  if (schemaProp.match && typeof schemaProp.match === 'function') {
    var matchFuncResult = schemaProp.match(prop)
    if (matchFuncResult !== true) {
      if (matchFuncResult) { // If the match func returned a string use that as msg
        return matchFuncResult
      } else { // If not use the default schema msg
        if (schemaProp.message) {
          return schemaProp.message
        } else {
          throw new Error('Your schema needs to provide an error message')
        }
      }
    }
  } else if (schemaProp.match && typeof schemaProp.match !== 'function') {
    if (!prop.match(schemaProp.match)) {
      if (schemaProp.message) {
        return schemaProp.message
      } else {
        throw new Error('Your schema needs to provide an error message')
      }
    }
  }
  return result
}
