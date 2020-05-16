const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  const db = client.db('mydb');
    if (err) throw err;
    // customers is a collection we  want to create                             
    db.createCollection("customers", function (err, result) {
        if (err) throw err;
        console.log("database and Collection created!");
        client.close();
    });
});