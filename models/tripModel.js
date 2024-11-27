const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    tripName: { type: String, required: true },
    time: { type: Date, required: true },
    days: { type: Number, required: true },
    price: { type: Number, required: true },
    avatar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
