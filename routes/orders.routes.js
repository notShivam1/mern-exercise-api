var express = require("express");
var router = express.Router();
var {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders.controller");

router
  .route("/")
  .get(getOrders)
  .delete(deleteOrder)
  .post(createOrder)
  .put(updateOrder);

module.exports = router;
