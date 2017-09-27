//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb'); // its same as above statment

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
  if(err) {
   return  console.log('Unable to connect to connect to MogoDb Server');
  }
  console.log('Connected to Mongodb server');

  db.collection('Todos').find({name:'upender'}).toArray().then((docs)=> {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=> {
    console.log('Unable to fetch toDos',err);
  });

  // db.collection('Todos').find({_id:2}).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=> {
  //   console.log('Unable to fetch toDos',err);
  // });

  // db.collection('Todos').find().count().then((count)=> {
  //   console.log(`Todos count: ${count}`);
  // },(err)=> {
  //   console.log('Unable to fetch toDos',err);
  // });

// var ftc=db.collection('Todos').find();
// ftc.each(function(err,doc){
//   console.log(doc);
// });
//  db.close();
});
