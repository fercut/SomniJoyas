import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {type: String, require: true},
  lastname: {type: String, require: true},
  email: {type: String, require: true, unique: true, trim: true},
  phone: {type: Number, require:true, unique:true, trim: true},
  adress: {type: String, require: true},
  location: {type: String, require: true, trim: true},
  city: {type: String, require: true, trim: true},
  postalCode: {type: Number, require: true, trim: true},
  password: { type: String, require: true, trim: true},
  isAdmin: { type: Boolean, default: false },
  cart: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        default: undefined,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
}, { timestamps: true });

export default model('users', userSchema);
