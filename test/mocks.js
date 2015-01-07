exports.getErrors = {
  name: {
    type: 'string',
    required: true,
    message: 'Please provide your name'
  },
  name1: {
    required: true,
    message: 'Please provide your name'
  },
  name2: {
    type: 'string',
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
};

exports.schema = {
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
};

exports.noErrors = {
  name: 'badem4o',
  email: 'badem4o@example.com',
  age: '29'
};

exports.noName = {
  name: '',
  email: 'badem4o@example.com',
  age: '29'
};

exports.noEmail = {
  name: 'badem4o',
  email: '',
  age: '29'
};

exports.noAge = {
  name: 'badem4o',
  email: 'badem4o@example.com',
  age: ''
};
