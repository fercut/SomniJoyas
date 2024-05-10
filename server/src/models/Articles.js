import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const articlesSchema = new Schema({
  type: {
    type: String,
    require: true,
    enum: ['anillo', 'pendientes', 'pulseras', 'cadenas', 'gargantillas', 'colgante']
  },
  material: {
    type: String,
    require: true,
    enum: ['plata', 'oro', 'acero']
  },
  finish: {
    type: String,
    require: true,
    enum: ['plateado', 'Baño de oro de 18kt.', 'Baño de Oro Rosa de 18kt.', 'Baño de rodio']
  },
  dimensions: {type: String},
  details: {type: String, require: true},
  units: {type: Number, require: true},
  price: {type: Number, require: true},
  image: {type: String, require: true},
}, { timestamps: true });

export default model('articles', articlesSchema);
