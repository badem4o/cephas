module.exports = function cast(prop) {
  prop = prop.replace(/\s+/g, '');
  if (/\S/.test(prop) && !isNaN(+prop)) {
    return +prop;
  } else {
    return prop;
  }
};
