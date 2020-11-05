const chalk = require("chalk");

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }
    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({
        _id: new ObjectID("5f9d5ab24763ac44acda42be"),
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
