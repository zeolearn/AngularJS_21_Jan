var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  var rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }

    ]
  res.json(rules);
});

router.post('/api', function(req, res, next) {
  var rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" },
        { rulename: "Must be unique" }

    ]
  res.json(rules);
});

module.exports = router;
