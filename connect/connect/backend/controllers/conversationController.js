exports.getConversations = async (req, res) => {
  res.json([
    {
      name: "Juninho",
      lastMessage: "Bora estudar hoje?"
    },
    {
      name: "Beatriz",
      lastMessage: "Você viu o evento de amanhã?"
    }
  ]);
};
