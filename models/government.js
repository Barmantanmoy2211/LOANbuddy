const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const govSchema = new mongoose.Schema({
    username: String,
    password: String,
    userType: String,
    gov: String
  });
  
  govSchema.plugin(passportLocalMongoose);

  module.exports = mongoose.model('Government', govSchema);