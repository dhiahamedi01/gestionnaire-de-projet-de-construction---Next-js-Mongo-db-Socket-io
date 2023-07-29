import dbConnect from "@/utils/dbConnect";
import Projet from "@/models/Projet"; 
import nc from "next-connect";
dbConnect()

const handler = nc().delete(async(req,res)=>{
    
    try {
       const newproject = await Projet.findOneAndDelete({id:req.query.id})
      
       res.send(  'Projet has been deleted Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
}).put(async(req,res)=>{
    
    try {
       const projet = await Projet.findOne({_id:req.query.id})
       projet.nom = req.body.nom
       projet.desc = req.body.desc
       projet.type = req.body.type
       projet.Date = req.body.Date
       projet.local = req.body.local
       projet.selectedMuni = req.body.selectedMuni
       projet.Client = req.body.Client
       projet.Devise = req.body.Devise
       projet.Imageurl = req.body.Imageurl
       await projet.save()
       
       res.send(  'project has been updated Successfully !' )
        
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong !' })
        console.log(error)
    }
})

export default  handler
  