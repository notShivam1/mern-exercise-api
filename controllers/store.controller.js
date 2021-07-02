const Store = require("../models/store.model");

module.exports = {
  createStore: async (req, res) => {
    console.log(req.body);
    let s = new Store(req.body);
    s.save()
      .then((saved) => {
        res.status(200).send(saved.uId);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  },
  getStores: async (req, res) => {
    Store.find({ googleId: req.params.googleId }, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      }
      if (!results) {
        return res.status(404).send({ message: "not found" });
      }
      res.send(results);
    });
  },
  getStore: async (req, res) => {
    Store.findOne({ googleId: req.params.googleId }, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      }
      res.send(results);
    });
  },
  // updateStore: async (req, res) => {
  //   Store.updateOne(
  //     { uId: req.params.storeid },
  //     { $push: { scores: req.body } },
  //     (err, results) => {
  //       if (err) {
  //         res.status(500).json({ error: err });
  //       }
  //       res.send("updated the store");
  //     }
  //   );
  // },
  // deleteStore: async (req, res) => {
  //   Store.deleteOne({ uId: req.params.storeid }, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).json({ error: err });
  //     }
  //     if (!results) {
  //       res.status(404).send("not found");
  //     }
  //   });
  //   res.json({ message: "deleted the document" });
  // },
};
