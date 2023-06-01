const mongoose = require('mongoose');
export default async function dbConnect(){
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/test',
       {useUnifiedTopology:true,useNewUrlParser:true});
       console.log('connect success')
    } catch (error) {
        console.log(error)
    }
}