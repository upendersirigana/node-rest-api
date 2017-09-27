//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb'); // its same as above statment

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
  if(err) {
   return  console.log('Unable to connect to connect to MogoDb Server');
  }
  console.log('Connected to Mongodb server');
 // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
 //   console.log(result);
 // });

 // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
 //   console.log(result);
 // });

 db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   console.log(result);
 });
  // db.collection('Todos').find({name:'upender'}).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=> {
  //   console.log('Unable to fetch toDos',err);
  // });
});
