const mongoose = require("mongoose");
const shortid = require("shortid");

const StoreSchema = new mongoose.Schema({
  uId: { type: String, default: shortid.generate() },
  createdAt: { type: String, default: Date.now() },
  googleId: { type: String },
  storeName: { type: String },
  email: { type: String },
  mobileNumber: {
    type: String,
  },
  city: { type: String },
  state: { type: String },
  pinCode: { type: String },
  customerCode: {
    type: String,
  },
  storeAddress: {
    type: String,
  },
});

let Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
