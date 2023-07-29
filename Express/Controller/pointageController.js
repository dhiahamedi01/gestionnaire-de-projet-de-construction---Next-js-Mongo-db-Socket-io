const Pointage = require('../models/Pointage');
const nodemailer = require('nodemailer');

// Récupérer l'ID maximum du pointage depuis la base de données
const getMaxPointageId = async () => {
  try {
    const maxId = await Pointage.findOne().sort({ id: -1 }).select('id');
    return maxId ? maxId.id + 1 : 1;
  } catch (err) {
    console.error('Failed to retrieve max pointage ID:', err);
    throw err;
  }
};

// Ajouter un nouveau pointage à la base de données et envoyer une notification par e-mail
const addPointage = async (PointageData) => {
  try {
    const newId = await getMaxPointageId();

    const newPointage = new Pointage({
      id: newId,
      Conso: PointageData.Conso,
      prixEmp: PointageData.prixEmp,
      prixEqu: PointageData.prixEqu,
      NbrUnit: PointageData.NbrUnit,
      Date: PointageData.Date
    });

    await newPointage.save();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'ademjbali01@gmail.com',
        pass: 'ihwonfygtnxqidri',
      },
    });

    const mailOptions = {
      from: '"Wavers"<ademjbali01@gmail.com>',
      to: "<aaddeemmjbali@gmail.com>,<nejijbali01@gmail.com>",
      subject: 'Nouveau pointage ajouté',
      text: `Un nouveau pointage a été ajouté:\n\nConsommation matériel: ${PointageData.Conso}\nPrix d'équipement: ${PointageData.prixEqu}\nPrix des Employés: ${PointageData.prixEqu}\nNombre d'unités: ${PointageData.NbrUnit}\nDate: ${PointageData.Date}`,
    };

    await transporter.sendMail(mailOptions);

    return newPointage;
  } catch (err) {
    console.error('Failed to save Pointage:', err);
    throw err;
  }
};

module.exports = { addPointage };
