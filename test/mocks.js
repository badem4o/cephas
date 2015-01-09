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
  name3: {
    type: 'string',
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm
  },
  badem4o: {
    type: 'string',
    required: true,
    match: function (prop) {
      if (prop === 'badem4o') {
        return true;
      } else {
        return false;
      }
    },
    message: 'Make sure you are badem4o'
  },
  badem4o2: {
    type: 'string',
    required: true,
    match: function (prop) {
      if (prop === 'badem4o') {
        return true;
      } else {
        return false;
      }
    }
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
  age: '19'
};

exports.noName = {
  name: '',
  email: 'badem4o@example.com',
  age: '19'
};

exports.noEmail = {
  name: 'badem4o',
  email: '',
  age: '19'
};

exports.noAge = {
  name: 'badem4o',
  email: 'badem4o@example.com',
  age: ''
};
