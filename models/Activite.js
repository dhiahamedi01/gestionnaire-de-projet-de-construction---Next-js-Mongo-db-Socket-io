const mongoose = require('mongoose');

const pointageSchema = new mongoose.Schema(
  { 
    id: { type: Number, unique: true, required: true },
    nom: String,
    projet: String,
    typeActiv: String,
    Responsable:String,
    priceM: Number,
    priceT: Number,
    Unite: String,
    NBR:Number,
    DateD:  Date,
    DateF:  Date,
  }
);

module.exports = mongoose.model('Pointage', pointageSchema);
