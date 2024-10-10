import { Schema, model } from "mongoose";

const maintenceSchema = new Schema({
  maintence: {
    type: Schema.Types.ObjectId,
    ref: "Maintence",
    required: true,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "vehicle",
    required: true,
  },
  services: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  date: {
    type: Date,
    require: true,
  },
  totalCost: {
    type: Number,
    ref: "services",
  },
});

const Maintence = model("Maintence", maintenceSchema);

export default Maintence;
