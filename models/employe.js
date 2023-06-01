const mongoose = require('mongoose');
const employeSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nom : String,
    prenom: String,
    tel: Number,
    price : Number,
    type: String,
    email: String,
    password: String,
    RIB:Number,
})
export default mongoose.models.employe || mongoose.model('employe',employeSchema )