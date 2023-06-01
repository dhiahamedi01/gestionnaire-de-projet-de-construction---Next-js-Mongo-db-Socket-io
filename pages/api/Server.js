import { Server } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import dbConnect from '@/utils/dbConnect';
import Message from '@/models/Message';

const handler = nc();


handler.post(async (req, res) => {
  const { idEnv, message } = req.body;

  try {
    await dbConnect();

    const newMessage = new Message({
      idEnv,
      message
    });

    await newMessage.save();

    const io = req.socket.server.io;
    io.emit('message', newMessage); // Diffuser le message à tous les clients connectés

    res.status(200).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Failed to save message:', err);
    res.status(500).json({ message: 'Failed to save message' });
  }
});

handler.get(async (req, res) => {
  try {
    await connectDB();

    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    console.error('Failed to retrieve messages:', err);
    res.status(500).json({ message: 'Failed to retrieve messages' });
  }
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default handler;
