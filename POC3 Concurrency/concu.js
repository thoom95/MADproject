const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://thoom95:sk8board@pocconcurrency-mtr4o.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  collection = client.db("test").collection("devices");

  collection.insertOne(
    { item: "sharedResource" },
    { value: 140 }
  )
    .then(function (result) {
      console.log(result)
    })

  client.close();
});

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log('test1')
// client.connect(err => {
//   console.log('test2')

//   const collection = client.db("test").collection("devices");
//   // console.log(collection.findOne({name: 't4est1'}).name)
//   var myobj = { name: "test1", address: "Highway 7" };
//   collection.insertOne(myobj);
  // console.log('test')

  // const cursor = collection.find({});
  // cursor.each(function(err, doc) {
  //   console.log(doc);
  // });

  // collection.find({name: 't4est1'}).toArray((err, items) => {
  //   console.log(items)
  // })

//   while (cursor.hasNext()) {
//     console.log(cursor.toArray());
//  }
  //client.close();
//});
