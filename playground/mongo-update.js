//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb'); // its same as above statment

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
  if(err) {
   return  console.log('Unable to connect to connect to MogoDb Server');
  }
  console.log('Connected to Mongodb server');

db.collection('Todos').findOneAndUpdate({
  name : 'upender'
},{

    $set: {
      age : 24
    }

}, {
  returnOriginal : 25
}).then((result)=> {
    console.log(result);
  //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
});
  db.close();
});
