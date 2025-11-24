exports.register = async (req, res) => {
  const User = require("../models/User");
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.json({ success: true });
};

exports.login = async (req, res) => {
  const User = require("../models/User");
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.json({ error: "Credenciais inválidas" });

  const code = Math.floor(100000 + Math.random() * 900000);
  res.json({ code });
};

exports.verify = async (req, res) => {
  const { code, realCode } = req.body;

  res.json({ success: code === realCode });
};
