const Message = require('../../models/Message');

// Récupérer tous les messages depuis la base de données
const getAllMessages = async () => {
  try {
    const messages = await Message.find();
    return messages;
  } catch (err) {
    console.error('Failed to retrieve messages:', err);
    throw err;
  }
};

// Ajouter un nouveau message à la base de données
const addMessage = async (messageData) => {
  try {
    const newMessage = new Message({
      idEnv: messageData.idEnv,
      message: messageData.message
    });

    await newMessage.save();
    return newMessage;
  } catch (err) {
    console.error('Failed to save message:', err);
    throw err;
  }
};

module.exports = { getAllMessages, addMessage };
