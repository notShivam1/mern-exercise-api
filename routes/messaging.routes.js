let router = new require("express").Router();
const {
  sendWhatsApp,
  sendEmail,
} = require("../controllers/messaging.controller");

router.post("/", sendWhatsApp);
router.post("/", sendEmail);

module.exports = router;
