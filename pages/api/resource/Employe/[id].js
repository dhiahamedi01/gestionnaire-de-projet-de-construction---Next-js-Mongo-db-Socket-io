import dbConnect from "@/utils/dbConnect";
import Employe from "@/models/employe"; 
import nc from "next-connect";
import bcrypt from "bcrypt";
dbConnect()

const handler = nc().delete(async(req,res)=>{
    
    try {
       const newEmploye = await Employe.findOneAndDelete({id:req.query.id})
       res.send(  'Employe has been deleted Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
}).put(async(req,res)=>{
    
    try {
       const employe = await Employe.findOne({_id:req.query.id})
       employe.nom = req.body.nom
       employe.prenom = req.body.prenom
       employe.tel = req.body.tel
       employe.price = req.body.price
       employe.type = req.body.type
       employe.email = req.body.email
       const hashedPassword = await bcrypt.hash(req.body.password, 10)
       employe.password = hashedPassword
       employe.RIB = req.body.RIB

       
       await employe.save()
       
       res.send(  'Equipement has been updated Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
})

export default  handler
  