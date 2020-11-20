const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth.js");
const Task = require("../models/task.js");

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  console.log(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/tasks", auth, async (req, res) => {
  try {
    // could also work it like this => const tasks = await Task.find({ owner: req.user._id});
    await req.user.populate("tasks").execPopulate();
    res.status(201).send(req.user.tasks);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const allowedTasks = ["description", "completed"];
  const updates = Object.keys(req.body);
  const validUpdate = updates.every((update) => allowedTasks.includes(update));

  if (!validUpdate) {
    res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
