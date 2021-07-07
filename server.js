const express = require("express");
const app = express();
const ordersRoutes = require("./routes/orders.routes");
const usersRoutes = require("./routes/users.routes");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("api working");
});

app.use("/orders", ordersRoutes);
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`working at ${PORT}`);
});

//error middleware
app.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
});

module.exports = app;
