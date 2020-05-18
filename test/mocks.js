exports.getErrors = {
  name: {
    required: true,
    message: "Please provide your name",
  },
  name2: {
    message: "Please provide your name",
  },
  name3: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim,
  },
  milyord: {
    required: true,
    match: function (prop) {
      if (prop === "milyord") {
        return true;
      } else {
        return false;
      }
    },
    message: "Make sure you are milyord",
  },
  milyord2: {
    required: true,
    match: function (prop) {
      if (prop === "milyord") {
        return true;
      } else {
        return false;
      }
    },
  },
  milyord3: {
    required: true,
    match: function (prop) {
      if (prop === "milyord") {
        return true;
      } else {
        return "Make sure you are milyord from match function";
      }
    },
    message: "Make sure you are milyord",
  },
  email: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim,
    message: "Please provide your email address",
  },
};

exports.schema = {
  name: {
    required: true,
    message: "Please provide your name",
  },
  email: {
    required: true,
    match: /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim,
    message: "Please provide your email address",
  },
  age: {
    required: true,
    message: "Please provide your age",
  },
};

exports.noErrors = {
  name: "milyord",
  email: "milyord@example.com",
  age: "19",
};

exports.noName = {
  name: "",
  email: "milyord@example.com",
  age: "19",
};

exports.noEmail = {
  name: "milyord",
  email: "",
  age: "19",
};

exports.noAge = {
  name: "milyord",
  email: "milyord@example.com",
  age: "",
};
