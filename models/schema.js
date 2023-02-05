//import mongoose from 'mongoose';
//const { Schema } = mongoose;
const mongoose=require("mongoose")
const Schema =mongoose.Schema;


const NewUserS = new Schema({
  Username:  String, // String is shorthand for {type: String}
  FullName: String,
  Email: String,
  Phone : Number,
  password:  Number,
  password2:  Number,
});

const NewUser = mongoose.model('NewUser', NewUserS);
module.exports=NewUser;


const UserS = new Schema({
  Username:  String, // String is shorthand for {type: String}
  Email: String,
  password:  Number,
});

const User = mongoose.model('User', UserS);
module.exports=User;

