import dbConnect from "@/utils/dbConnect";
import employe from "../../../../models/employe";
import nc from "next-connect";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';

dbConnect()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ademjbali01@gmail.com',
      pass: 'ihwonfygtnxqidri',
    },
  });
  

const handler = nc().post(async(req, res) => {
    const {nom, prenom, tel, price,type,email,password,RIB} = req.body

    const maxId = await employe.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newemploye = new employe({id: newId,nom, prenom, tel, price,type,email,password:hashedPassword,RIB})
    
    try {
         await newemploye.save()
         const mailOptions = {
            from: '"Wavers"<ademjbali01@gmail.com>',
            to: email,
            subject: 'félicitations Vous avez été affecté à une entreprise',
            text: `Félicitations monsieur ${nom} ${prenom} Vous avez été nommé à un poste de: ${type}\nPrix par jour: ${price}\n`,
          };
          await transporter.sendMail(mailOptions);
         res.status(200).json({message:'New post added !'});
    } catch (error) {
         return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })
  
  .get(async(req,res)=>{ 
     try {
        const Employe = await employe.find({})
        res.send(Employe)
     } catch (error) {
         res.status(400).json({ status: 'Error somthing went wrong !' })
         console.log(error)
     }
 }) 



  export default handler