const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("chales. No conectamos");
    }
    console.log("Connectados to MongoDB");
    const db = client.db("TodoApp");
    db.collection("Users").insertOne(
      {
        name: "Lupe Marchano",
        age: 32,
        location: "Manteca, CA"
      },
      (err, result) => {
        if (err) {
          return console.log("chales. No pude", err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
      }
    );
    client.close();
  }
);
