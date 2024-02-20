import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {type: String, require: true,},
  lastname: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  phone: {type: Number, require:true, unique:true},
  adress: {type: String, require: true},
  location: {type: String, require: true},
  city: {type: String, require: true},
  postalCode: {type: Number, require: true},
  password: { type: String, require: true},
}, { timestamps: true });

export default model('User', userSchema);
