const express = require("express");
require("./db/mongoose");
const port = process.env.PORT || 3000;
const app = express();
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const router = new express.Router();
router.get("/test", (req, res) => {
  res.send("This is from my other router");
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
