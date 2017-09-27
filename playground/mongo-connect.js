//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb'); // its same as above statment

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
  if(err) {
   return  console.log('Unable to connect to connect to MogoDb Server');
  }
  console.log('Connected to Mongodb server');
//   db.collection('Todos').insertOne({
//     text : 'some thing to do',
//     completed: false
//   },
//   {
//     text : 'some thing to do2',
//     completed: false
//   },(err,result) => {
//     if(err) {
//       return console.log('unable to insert toDo',err)
//     }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
var ftc=db.collection('Todos').find(); // for fetch the data
ftc.each(function(err,doc){
  console.log(doc);
});
//console.log(ftc);

//console.log(db.collection('Todos').find().pretty());
db.collection('Todos').insertOne({
  name : 'upender',
  age : '25',
  location: 'Hyderabad'
},(err,result)=> {
  if(err) {
    return console.log('unable to insert toDo',err)
  }
    console.log(JSON.stringify(result.ops,undefined,2));
  //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
});
  db.close();
});
