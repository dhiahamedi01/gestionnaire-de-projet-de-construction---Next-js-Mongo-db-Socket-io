import Projet from "@/models/Projet";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().post(async(req, res) => {
    const {nom,desc,type,Date,local,selectedMuni,rue,Client,Devise,Imageurl} = req.body

    const maxId = await Projet.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    const newProjet = new Projet({id: newId,nom,desc,type,Date,local,selectedMuni,rue,Client,Devise,Imageurl})
    
    try {
         await newProjet.save()
         res.status(200).json({message:'New post added !'});
    } catch (error) {
         return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })
  
  .get(async(req,res)=>{
    
     try {
        const project = await Projet.find({})
        res.send(  project )
         
     } catch (error) {
         res.status(400).json({ status: 'Error somthing went wrong !' })
         console.log(error)
     }
 }) 



  export default handler