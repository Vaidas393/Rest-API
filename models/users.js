const mongoose = require("mongoose");
const yup = require("yup");

//USER SCHEMA
const UserSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
first_name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
last_name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
job:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
}
 });

const validateUser = (user) => {
  const schema = yup.object().shape({
    userEmail: yup.string().required().email("Bad email format").min(3).max(50),
    userName: yup.string().required().min(3).max(40),
    userLastName: yup.string().required().min(3).max(40),
    jobTitle: yup.string().required().min(3).max(40),
  });

  return schema
    .validate(user)
    .then((user) => user)
    .catch((error) => {
      return {
        message: error.message,
      };
    });
};

exports.User = new mongoose.model("User", UserSchema);
exports.validateUser = validateUser;
