const mongoose = require('mongoose');
const EquipementSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nom : String,
    desc: String,
    Unit: String,
    price : Number,
})
export default mongoose.models.Equipement || mongoose.model('Equipement',EquipementSchema )