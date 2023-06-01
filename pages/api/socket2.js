const express = require('express');
const http = require('http');
const mongoose = require('mongoose'); 
const { Server } = require('socket.io');
const connectDB = require('../../utils/connectDB');
const Pointage = require('../../models/Pointage');
const nodemailer = require('nodemailer');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', async (socket) => {
  console.log('Responsable are  connected');

  await connectDB();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ademjbali01@gmail.com',
      pass: 'ihwonfygtnxqidri',
    },
  });

  socket.on('Pointage', async (PointageData) => {
    console.log('Received Data:', PointageData);
    const maxId = await Pointage.findOne().sort({ id: -1 }).select('id');
    const newId = (maxId ? maxId.id + 1 : 1);
    try {
    const newPointage = new Pointage({
      id: newId,
      Conso: PointageData.Conso,
      prixEmp: PointageData.prixEmp,
      prixEqu: PointageData.prixEqu,
      NbrUnit: PointageData.NbrUnit,
      Date: PointageData.Date
    });
  
      console.log('avant l enregistrement ');
      await newPointage.save();
      console.log('enregistrement success');
      const i = 1;
      io.emit('Pointage', i); 
      console.log('Notif  success');

      const mailOptions = {
        from: '"Wavers"<ademjbali01@gmail.com>',
        to: "<aaddeemmjbali@gmail.com>,<nejijbali01@gmail.com>",
        subject: 'Nouveau pointage ajouté',
        text: `Un nouveau pointage a été ajouté:\n\nConsommation matériel: ${PointageData.Conso}\nPrix d'équipement: ${PointageData.prixEqu}\nPrix des Employés: ${PointageData.prixEqu}\nNombre d'unités: ${PointageData.NbrUnit}\nDate: ${PointageData.Date}`,
      };
      await transporter.sendMail(mailOptions);

    }catch (err){
      console.error('Failed to save Pointage:', err);
    }
  });
  

  socket.on('disconnect', () => {
    console.log('Responsable are disconnected');
  });
});
server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
