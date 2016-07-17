[![Build Status](https://travis-ci.org/milyord/cephas.svg?branch=v2.0.1)](https://travis-ci.org/milyord/cephas)
[![Coverage Status](https://coveralls.io/repos/milyord/cephas/badge.svg?branch=master&service=github)](https://coveralls.io/github/milyord/cephas?branch=master)

#Cephas

Cephas is a little tool for validating simple objects against a schema. Works great with redux-form.

Usage:

```javascript

var cephas = require('cephas');
var validate = cephas({
  name: {
    required: true,
    message: 'Please provide your name'
  },
  email: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm, // you can match on regex
    message: 'Please provide your email address'
  },
  age: {
    required: true,
    message: 'Please provide your age'
  },
  customMatchFunctionDefaultMsg: {
    required: true,
    match: function (prop) { // You can match with a function
      if (prop === 'happy') {
        return true;
      } else {
        return false; // If you return false the default err msg will be used
      }
    },
    message: 'Please cheer up a bit!'
  },
  customMatchFunctionCustomMsg: {
    required: true,
    match: function (prop) {
      if (prop === 'happy') {
        return true;
      } else {
        return 'Please cheer up a bit!!!'; // Or you can return a custom msg
      }
    },
    message: 'This message will be ignored because the function returns a string'
  }
});

// In this case errors will equal false as all props pass validation
var errors = validate({
  name: 'milyord',
  email: 'milyord@example.com',
  age: '19'
});

```

If errors exist:

```javascript

// In this case errors will be an object as props fail validation
var errors = validate({
  name: '',
  email: '',
  age: ''
});

console.log(erros);
/* Will log the following:
  {
    name: 'Please provide your name',
    email: 'Please provide your email address',
    age: 'Please provide your age'
  }
*/

```
Pretty self explanatory stuff.

Cheers!
