import dbConnect from "@/utils/dbConnect";
import Matriel from "../../../models/Matriel";
import nc from "next-connect";

dbConnect()


const handler = nc().post(async(req, res) => {
    const {mat,nom,desc,price} = req.body

    const maxId = await Matriel.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    const newMatriel = new Matriel({id: newId,mat,nom,desc,price})
    
    try {
         await newMatriel.save()
         res.status(200).json({message:'New post added !'});
    } catch (error) {
         return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })
  
  .get(async(req,res)=>{ 
     try {
        const matriel = await Matriel.find({})
        res.send(matriel)
     } catch (error) {
         res.status(400).json({ status: 'Error somthing went wrong !' })
         console.log(error)
     }
 }) 



  export default handler