const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nom : String,
    prenom: String,
    email: String,
    password: String,
    Role : String,
    tel : Number,
    
})


export default mongoose.models.User || mongoose.model('User',UserSchema )