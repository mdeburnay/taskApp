require("../src/backend/db/mongoose.js");

const User = require("../src/backend/models/user.js");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5fa6ce124286d720a0877b5b", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => console.log(e));
