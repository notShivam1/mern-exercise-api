let orders = require("./orders.json");
let helper = require("../helpers/writeFile.js");

function getOrders(req, res) {
  return new Promise((resolve, reject) => {
    if (!orders.length) {
      reject(res.status(404).json({ message: "no orders found" }));
    }
    resolve(res.status(200).send(orders));
  });
}

function createOrder(req, res) {
  const addOrder = req.body;
  return new Promise((resolve, reject) => {
    if (!addOrder) {
      reject(res.status(404).json({ message: "could not add order" }));
    }
    orders.push(addOrder);
    helper.writeJSONFile(__dirname + "/orders.json", orders);
    resolve(res.status(200).json({ message: "successfully created order" }));
  });
}

function updateOrder(req, res) {
  console.log(req.body);
  const index = orders.findIndex((o) => o.orderNumber == req.body.orderNumber);
  return new Promise((resolve, reject) => {
    if (!index) {
      reject(res.status(404).json({ message: "could not update order" }));
    }
    let newObj = req.body;
    orders[index] = newObj;
    helper.writeJSONFile(__dirname + "/orders.json", orders);
    resolve(res.status(200).json({ message: "successfully updates order" }));
  });
}

function deleteOrder(req, res) {
  return new Promise((resolve, reject) => {
    const index = orders.findIndex(
      (o) => o.orderNumber == req.body.orderNumber
    );
    if (!index) {
      reject(res.status(404).json({ message: "could not delete order" }));
    }
    orders = orders.filter((o) => o.orderNumber !== req.body.orderNumber);
    helper.writeJSONFile(__dirname + "/orders.json", orders);
    resolve(res.status(200).json({ message: "successfully deleted order" }));
  });
}

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
