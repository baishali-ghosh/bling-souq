var mongoose = require('mongoose');  
var categorySchema = new mongoose.Schema({  
  name: String,
  created_on: { type: Date, default: Date.now },
});
mongoose.model('Category', categorySchema);