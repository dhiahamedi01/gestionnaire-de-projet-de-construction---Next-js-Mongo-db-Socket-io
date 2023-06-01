const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  idEnv: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
export default mongoose.models.message || mongoose.model('message',messageSchema )
