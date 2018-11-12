var mongoose = require("mongoose");

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var user = new User({
//   email: "    tuscaino@gmail.com"
// });
//
// user.save().then(
//   doc => {
//     console.log(JSON.stringify(doc));
//   },
//   e => {
//     console.log(`unable to save ${e}`);
//   }
// );

module.exports = { User };
