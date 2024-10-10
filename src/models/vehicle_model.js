import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
  plate: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  owner: {
    type: String,
    require: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    ref: "maintence",
    required: true,
  },
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
    