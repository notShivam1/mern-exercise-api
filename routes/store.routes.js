let router = new require("express").Router();
const {
  createStore,
  getStores,
  getStore,
  // updateStore,
  // deleteStore,
} = require("../controllers/store.controller");

router.post("/", createStore);
router.get("/", getStore);
router.get("/:googleId", getStores);
// router.put("/:storeid", updateStore);
// router.delete("/:storeid", deleteStore);

module.exports = router;
