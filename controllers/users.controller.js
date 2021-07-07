let users = require("./users.json");

function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(res.status(403).json({ message: "some problem" }));
    }
    const row = users.find((r) => r.email == email);
    console.log(row);
    if (!row) {
      reject(res.status(404).json({ message: "Couldnt find the email" }));
    }
    if (row.password !== password) {
      reject(res.status(403).json({ message: "incorrect password" }));
    }
    resolve(res.status(200).json({ message: "successful login" }));
  });
}

module.exports = {
  loginUser,
};
