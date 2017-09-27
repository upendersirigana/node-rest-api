var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type : Boolean
  },
  completedAt : {
    type : Number
  }
});

// var newTodo=new Todo({
//   text:'Cook dinner'
// });
//
// newTodo.save().then(doc)=> {
//   console.log('Saved todo',doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

var newTodo1=new Todo({
  text:'Hi this is my new application'
});

newTodo1.save().then((doc)=> {
  console.log(JSON.stringify(doc,undefined,2));
  //console.log('saved todo',doc);
},(e)=> {
  console.log('Unable to save todo application');
});
