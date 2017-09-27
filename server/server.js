var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} =  require('./models/todo');
var {User} = require('./models/user');

var app= express();
const port=process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
  //console.log(req.body)
  var todos = new Todo({
    text: req.body.text
  });
  todos.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  });
});
app.listen(3000, ()=> {
  console.log('Started on port 3000');
});
