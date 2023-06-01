import dbConnect from "@/utils/dbConnect";
import Resource from "../../../../models/Equipement";
import nc from "next-connect";

dbConnect()


const handler = nc().post(async(req, res) => {
    const {Unit,nom,desc,price} = req.body

    const maxId = await Resource.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    const newResource = new Resource({id: newId,Unit,nom,desc,price})
    
    try {
         await newResource.save()
         res.status(200).json({message:'New post added !'});
    } catch (error) {
         return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })
  
  .get(async(req,res)=>{ 
     try {
        const resource = await Resource.find({})
        res.send(resource)
     } catch (error) {
         res.status(400).json({ status: 'Error somthing went wrong !' })
         console.log(error)
     }
 }) 



  export default handler