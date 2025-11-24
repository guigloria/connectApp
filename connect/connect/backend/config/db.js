const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb+srv://SEU-LINK-DO-MONGODB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.log("Erro ao conectar no MongoDB:", err));
};