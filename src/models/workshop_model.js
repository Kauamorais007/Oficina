import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  specialties: {
    type: String,
    enum: ["Engine", "Brakes", "Suspension", "Oil", "Alignment", "Rectification"],
    required: true
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    ref: "maintence",
    required: true,
  },
});

const Workshop = model("Workshop", workshopSchema);

export default Workshop;
