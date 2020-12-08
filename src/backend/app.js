const express = require("express");
const multer = require("multer");
require("./db/mongoose");
const port = process.env.PORT || 3000;
const app = express();
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a PDF."));
    }

    cb(undefined, true);
  },
});

// const errorMiddleware = (req, res, next) => {
//   throw new Error("From my middleware");
// };

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
