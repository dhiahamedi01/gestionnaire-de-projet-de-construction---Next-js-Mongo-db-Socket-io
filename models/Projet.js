const mongoose = require('mongoose');

const ProjetSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nom : String,
    desc: String,
    type: String,
    Date : Date,
    local: String,
    selectedMuni:String,
    rue:String,
    Client: String,
    Devise: String,
    Imageurl: String,
})


export default mongoose.models.Projet || mongoose.model('Projet',ProjetSchema )