const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  userId: String,
  conversations: Array
});

module.exports = mongoose.model("Conversation", ConversationSchema);
