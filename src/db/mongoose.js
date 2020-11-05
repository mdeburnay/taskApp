const chalk = require("chalk");
const validator = require("validator");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid.");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number!");
//       }
//     },
//   },
//   password: {
//     type: String,
//     trim: true,
//     validate(value) {
//       if (value.length < 6) {
//         throw new Error("Password must be at least 6 characters long.");
//       } else if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot contain word "Password".');
//       }
//     },
//   },
// });

// const me = new User({
//   name: "   Max   ",
//   email: "   MYEMAIL@HOTMAIL.COM   ",
//   password: "lookitsapassword",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "Apply for jobs",
});

task
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
