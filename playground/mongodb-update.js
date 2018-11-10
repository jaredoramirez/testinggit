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
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5be64c9cc14083f3499ec2a7")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bb3c74a5b35870a1d55d46f")
        },
        {
          $set: {
            name: "Mis huevos peludos 2"
          },
          $inc: {
            age: 50
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
