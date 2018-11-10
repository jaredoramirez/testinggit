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

    // db.collection("Todos")
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .findOneAndDelete({ status: "new" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Users")
    //   .findOneAndDelete({ _id: new ObjectID("5be6474fc70da73b6f1c045a") })
    //   .then(result => {
    //     console.log(JSON.stringify(result));
    //   });

    db.collection("Users")
      .deleteMany({ name: "CHepe Ortega" })
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
