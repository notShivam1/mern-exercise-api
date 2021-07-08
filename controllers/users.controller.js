let users = require("./users.json");

function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(403).json({ message: "some problem" });
  }
  const row = users.find((r) => r.email == email);
  if (!row) {
    return res.status(404).json({ message: "Couldnt find the email" });
  }
  if (row.password !== password) {
    return res.status(403).json({ message: "incorrect password" });
  }
  return res.status(200).json({ message: "successful login" });
}

module.exports = {
  loginUser,
};
