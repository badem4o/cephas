exports.getErrors = {
  name: {
    required: true,
    message: 'Please provide your name'
  },
  name2: {
    message: 'Please provide your name'
  },
  name3: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm
  },
  badem4o: {
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
    required: true,
    match: function (prop) {
      if (prop === 'badem4o') {
        return true;
      } else {
        return false;
      }
    }
  },
  badem4o3: {
    required: true,
    match: function (prop) {
      if (prop === 'badem4o') {
        return true;
      } else {
        return 'Make sure you are badem4o from match function';
      }
    },
    message: 'Make sure you are badem4o'
  },
  email: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm,
    message: 'Please provide your email address'
  }
};

exports.schema = {
  name: {
    required: true,
    message: 'Please provide your name'
  },
  email: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm,
    message: 'Please provide your email address'
  },
  age: {
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
