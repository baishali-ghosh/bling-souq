var express = require('express');
//var mongoOp = require('./models/db');
var router = express.Router();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({"extended" : false}));
// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.route('/categories')
// .get(function(req, res) {
//    mongoOp.find(function(err, categories) {
//     if (err) {
//       return res.send(err);
//     }

//     res.json(categories);
//   });
// })
//   .post(function(req,res){
//         var db = new mongoOp();
//         var response = {};
//         // fetch email and password from REST request.
//         // Add strict validation when you use this in Production.
//         db.userEmail = req.body.email; 
//         // Hash the password using SHA1 algorithm.
//         db.userPassword =  require('crypto')
//                           .createHash('sha1')
//                           .update(req.body.password)
//                           .digest('base64');
//         db.save(function(err){
//         // save() will run insert() command of MongoDB.
//         // it will add new data in collection.
//             if(err) {
//                 response = {"error" : true,"message" : "Error adding data"};
//             } else {
//                 response = {"error" : false,"message" : "Data added"};
//             }
//             res.json(response);
//         });
//     });



module.exports = router;
