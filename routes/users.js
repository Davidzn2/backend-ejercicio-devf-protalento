var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({});
});
router.get('/1', (req, res, next)=>{
  res.send({
    user1: 'david'
  })
})
module.exports = router;
