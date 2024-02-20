import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const articlesSchema = new Schema({
  type: {
    type: String,
    require: true,
    enum: ['ring', 'earrings', 'bracelets', 'chokers', 'chains', 'pendants']
  },
  material: {
    type: String,
    require: true,
    enum: ['silver', 'gold', 'steel']
  },
  finish: {
    type: String,
    require: true,
    enum: ['silver', 'golden', 'pink gold']
  },
  dimensions: {type: String},
  details: {type: String, require: true},
  units: {type: Number, require: true},
  price: {type: Number, require: true},
  image: {type: String, require: true},
}, { timestamps: true });

export default model('Articles', articlesSchema);
