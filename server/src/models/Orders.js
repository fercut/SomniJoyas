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
      articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
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
  },
  sent: {
    type: Boolean,
    required: true,
    default: false,
  }
});

export default model('orders', orderSchema);