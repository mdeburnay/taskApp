require("../src/backend/db/mongoose.js");
const Task = require("../src/backend/models/task.js");

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete({ id });
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5fa860d60c1db31fc0c62854")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
