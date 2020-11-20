const express = require("express");
require("./db/mongoose");
const port = process.env.PORT || 3000;
const app = express();
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const Task = require("./models/task.js");
const User = require("./models/user.js");

const main = async () => {
  const user = await User.findById("5fb80fcc12e52725b401ff61");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
