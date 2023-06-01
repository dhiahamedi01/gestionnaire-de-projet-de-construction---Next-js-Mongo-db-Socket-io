import dbConnect from "@/utils/dbConnect";
import Equipement from "@/models/Equipement"; 
import nc from "next-connect";
dbConnect()

const handler = nc().delete(async(req,res)=>{
    
    try {
       const newEquipement = await Equipement.findOneAndDelete({_id:req.query.id})
      
       res.send(  'Equipement has been deleted Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
}).put(async(req,res)=>{
    
    try {
       const equipement = await Equipement.findOne({_id:req.query.id})
       equipement.Unit = req.body.Unit
       equipement.desc = req.body.desc
       equipement.nom = req.body.nom
       equipement.price = req.body.price
       
       await equipement.save()
       
       res.send(  'Equipement has been updated Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
})

export default  handler
  