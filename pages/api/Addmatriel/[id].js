import dbConnect from "@/utils/dbConnect";
import Matriel from "@/models/Matriel"; 
import nc from "next-connect";
dbConnect()

const handler = nc().delete(async(req,res)=>{
    
    try {
       const newMatriel = await Matriel.findOneAndDelete({id:req.query.id})
      
       res.send(  'Matriel has been deleted Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
}).put(async(req,res)=>{
    
    try {
       const NewMatriel = await Matriel.findOne({_id:req.query.id})
       NewMatriel.nom = req.body.nom
       NewMatriel.desc = req.body.desc
       NewMatriel.mat = req.body.mat
       NewMatriel.price = req.body.price
       await NewMatriel.save()
       
       res.send(  'project has been updated Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
})

export default  handler
  