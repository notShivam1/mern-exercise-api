let orders = require("./orders.json");
let helper = require("../helpers/writeFile.js");

function getOrders(req, res) {
  if (!orders.length) {
    return res.status(404).json({ message: "no orders found" });
  }
  return res.status(200).send(orders);
}

function createOrder(req, res) {
  console.log(req.body);
  if (!req.body) {
    return res.status(404).json({ message: "could not add order" });
  }
  orders.push(req.body);
  helper.writeJSONFile(__dirname + "/orders.json", orders);
  return res.status(200).json({ message: "successfully created order" });
}

function updateOrder(req, res) {
  const { orderNumber } = req.body;
  const index = orders.findIndex((o) => o.orderNumber == orderNumber);
  console.log(orderNumber, req.body);
  if (index === -1) {
    console.log("yo");
    return res.status(404).json({ message: "could not update order" });
  }
  let newObj = req.body;
  orders[index] = newObj;
  helper.writeJSONFile(__dirname + "/orders.json", orders);
  return res.status(200).json({ message: "successfully updates order" });
}

function deleteOrder(req, res) {
  const { orderNumber } = req.body;
  const index = orders.findIndex((o) => o.orderNumber == orderNumber);
  if (index === -1) {
    return res.status(404).json({ message: "could not delete order" });
  }
  orders = orders.filter((o) => o.orderNumber !== orderNumber);
  helper.writeJSONFile(__dirname + "/orders.json", orders);
  return res.status(200).json({ message: "successfully deleted order" });
}

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
