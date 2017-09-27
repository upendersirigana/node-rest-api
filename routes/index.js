var express = require('express');
var router=express.Router();
var mongo=require('mongodb');
var assert=require('assert');
var express = require('express');
var app= express();
var url='mongodb://localhost:27017/test';

router.get('./',function(req,res,next){
  res.render('index');
});

router.get('/get-data',function(req,res,next){
  var resultArray=[];
  mongo.connect(url,function(err,db){
  assert.equal(null,err);
  var cursor=db.collection('user-data').find();
  cursor.forEach(function(doc,err){
    assert(null,err);
    resultArray.push(doc);
  },function(){
    db.close();
    res.render('index',{items: resultArray});
  });
});
});
//get-data
router.post('/insert',function(req,res,next){
  var item={
    title: 'sample application',
    content: 'this is my sample application',
    author:'this our data'
  };
  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    db.collection('user-data').insertOne(item,function(err,result){
      assert.equal(null,error);
      console.log('item inserted');
      db.close();
    });
  });
});

router.get('/update',function(req,res,next){

});

router.get('/delete',function(req,res,next){

});
app.listen(3000, ()=> {
  console.log('Started on port 3000');
});
module.exports=router;
