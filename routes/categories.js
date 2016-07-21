
var express = require('express');
var router = express.Router(),
mongoose = require('mongoose'), //mongo connection
bodyParser = require('body-parser'), //parses information from POST
methodOverride = require('method-override'); //used to manipulate POST

// router.use(bodyParser.urlencoded({ extended: true }))
// router.use(methodOverride(function(req, res){
//       if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//       }
// }))



router.route('/')
    //GET all blobs
    .get(function(req, res, next) {
        //retrieve all blobs from Monogo
        mongoose.model('Category').find({}, function (err, data) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                res.json(data);
              }     
        });
    });
    //create a category
    // .post(function(req, res) {
    //     // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    //     var name = req.body.name;
    //     var created_on = Date.now;

    //     var cat1 = mongoose.model('Category', ca)
    //     //call the create function for our database
    //     mongoose.model('Category').create({
    //         name : name
    //     }, function (err, blob) {
    //           if (err) {
    //               res.send("There was a problem adding the information to the database.");
    //           } else {
    //            	res.send("Added successfully");
    //           }
    //     })
    // });

module.exports = router;

