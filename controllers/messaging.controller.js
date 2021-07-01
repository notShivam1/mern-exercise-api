module.exports = {
  sendWhatsApp: async (req, res) => {
    console.log(req.body);
    res.status(200).send("done");
  },
  sendEmail: async (req, res) => {
    console.log(req.body);
    res.status(200).send("done");
  },
};
