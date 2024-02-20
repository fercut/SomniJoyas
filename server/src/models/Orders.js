import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  article: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Articulo',
      required: true
    }
  ],
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export default model('Orders', orderSchema);
