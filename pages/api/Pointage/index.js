import dbConnect from "@/utils/dbConnect";
import Pointage from "@/models/Pointage";
import nc from "next-connect";
import nodemailer from 'nodemailer';

dbConnect();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ademjbali01@gmail.com',
    pass: 'ihwonfygtnxqidri',
  },
});

const handler = nc()
  .post(async (req, res) => {
    const { Conso, prixEqu, prixEmp, NbrUnit, Date } = req.body;
    const email="nejijbali01@gmail.com"
    const maxId = await Pointage.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    const newPointage = new Pointage({ id: newId, Conso, prixEqu, prixEmp, NbrUnit, Date });

    try {
      await newPointage.save();
      const mailOptions = {
        from: '"Wavers"<ademjbali01@gmail.com>',
        to: "<aaddeemmjbali@gmail.com>,<nejijbali01@gmail.com>",
        subject: 'Nouveau pointage ajouté',
        text: `Un nouveau pointage a été ajouté:\n\nConsommation matériel: ${Conso}\nPrix d'équipement: ${prixEqu}\nPrix des Employés: ${prixEmp}\nNombre d'unités: ${NbrUnit}\nDate: ${Date}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'New post added!' });
    } catch (error) {
      return res.status(400).json({ message: 'Sorry, something went wrong!' });
    }
  })
  .get(async (req, res) => {
    try {
      const pointages = await Pointage.find({});
      res.json(pointages);
    } catch (error) {
      res.status(400).json({ status: 'Error, something went wrong!' });
      console.log(error);
    }
});

export default handler;

