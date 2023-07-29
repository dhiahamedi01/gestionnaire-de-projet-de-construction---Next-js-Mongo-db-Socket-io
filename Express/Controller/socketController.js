const messageController = require('./messageController');
const pointageController = require('./pointageController');

const handleConnection = async (socket, io) => {
  console.log('A user connected');

  try {
    const messages = await messageController.getAllMessages();
    socket.emit('allMessages', messages);
  } catch (err) {
    console.error('Failed to retrieve messages:', err);
  }

  socket.on('message', async (messageData) => {
    console.log('Received message:', messageData);

    try {
      const newMessage = await messageController.addMessage(messageData);
      io.emit('message', newMessage); 
    } catch (err) {
      console.error('Failed to save message:', err);
    }
  });

  socket.on('Pointage', async (PointageData) => {
    console.log('Received Data:', PointageData);

    try {
      const newPointage = await pointageController.addPointage(PointageData);
      const i = 1;
      io.emit('Pointage', i);
      io.emit('infoPointage', newPointage);
    } catch (err) {
      console.error('Failed to save Pointage:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};

module.exports = { handleConnection };
