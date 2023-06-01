const mongoose = require('mongoose');

const pointageSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    Conso: String,
    prixEqu: String,
    prixEmp: String,
    NbrUnit:String,
    Date:  Date,
  }
);

module.exports = mongoose.model('Pointage', pointageSchema);
