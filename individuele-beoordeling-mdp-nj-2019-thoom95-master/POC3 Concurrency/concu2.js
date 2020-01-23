const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://thoom95:sk8board@pocconcurrency-mtr4o.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  collection = client.db("test").collection("devices");

  collection.updateOne(
    { item: "sharedResource" },
    { $inc: { "value": 20 } }
  )
    .then(function (result) {
      console.log(result)
    })

  const cursor = collection.find({item : "sharedResource"});
  cursor.each(function (err, doc) {
    console.log(doc);
  });

  client.close();
});
