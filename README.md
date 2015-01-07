[![Build Status](http://img.shields.io/travis/badem4o/cephas.svg?style=flat)](https://travis-ci.org/badem4o/cephas)

#Cephas

Cephas is a micro library for validating simple objects against a schema.
It is useful for front end form validation and intended for use with browserify.

Usage:

```javascript

var cephas = require('cephas');
var schema = cephas({
  name: {
    type: 'string',
    required: true,
    message: 'Please provide your name'
  },
  email: {
    type: 'string',
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm,
    message: 'Please provide your email address'
  },
  age: {
    type: 'number',
    required: true,
    message: 'Please provide your age'
  }
});

// In this case errors will equal false as all props pass validation
var errors = schema.validate({
  name: 'badem4o',
  email: 'badem4o@example.com',
  age: '19'
});

```

If errors exist:

```javascript

// In this case errors will be an object as props fail validation
var errors = schema.validate({
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

Cheers.
