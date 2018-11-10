// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("chales. No conectamos");
    }
    console.log("Connectados to MongoDB");
    const db = client.db("TodoApp");

    db.collection("Users")
      .find({ name: "Lupe Marchano" })
      .count()
      .then(
        count => {
          console.log(`Todos count ${count}`);
        },
        err => {
          console.log("unable to fetch", err);
        }
      );

    client.close();
  }
);
