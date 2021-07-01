const mongoose = require("mongoose");
const shortid = require("shortid");

const StoreSchema = new mongoose.Schema({
  uId: { type: String, default: shortid.generate() },
  createdAt: { type: String, default: Date.now() },
  googleId: { type: String },
  name: { type: String },
  email: { type: String },
  contactNumber: {
    type: String,
  },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  address: {
    type: String,
  },
  customerCode: {
    type: String,
  },
});

let Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
