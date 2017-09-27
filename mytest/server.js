var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var product = require('./product');
var mongoose = require('./mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

router.route('/products').post(function (req, res) {
  var p = new product();
  p.title = req.body.title;
  p.price = req.body.price;
  p.instock = req.body.instock;
  p.photo = req.body.photo;
  p.save(function (err) {
      if (err) {
          res.send(err);
      }
      res.send({ message: 'Product Created !' })
  });
});

router.route('/products').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});


router.route('/products/:product_id').get(function (req, res) {

    product.findById(req.params.product_id, function (err, prod) {
        if (err){
            res.send(err);
        }
        res.json(prod);
        console.log(prod);
    });
});
// router.route('/products/:byId').post(function (req, res) {
//
//     product.findById(req.param.title,function (err, products) {
//         if (err) {
//             res.send(err);
//         }
//        //prod.title = req.body.title;
//         res.send(products);
//         console.log(products);
//     });
// });

router.route('/products_update/:product_id').put(function (req, res) {

    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
      //  prod.title = req.body.title;
        prod.price = req.body.price;
      //  prod.instock = req.body.instock;
      //  prod.photo = req.body.photo;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});

router.route('/products/remove').delete(function (req, res) {

    product.remove(req.body.title , function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
// all other code will go here

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);
