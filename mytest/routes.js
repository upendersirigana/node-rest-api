var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './images' });
var router = express.Router();

/* POST saveblog router. */
router.post('/saveBlog', upload.any(), function(req, res, next) {
  console.log(req.body, 'Body');
  console.log(req.files, 'files');
  var title = req.body.titleInput;
  var body = req.body.bodyInput;
  console.log(title);
  console.log(body);
  console.log(req.files.Originalname, 'files');
  res.end();
});

module.exports = router;
