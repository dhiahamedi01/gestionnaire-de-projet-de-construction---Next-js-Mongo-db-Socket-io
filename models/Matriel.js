const mongoose = require('mongoose');
const matrielSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nom : String,
    desc: String,
    unit: String,
    mat: Number,
    price : Number,
})
export default mongoose.models.matriel || mongoose.model('matriel',matrielSchema )