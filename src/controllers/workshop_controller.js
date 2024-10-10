import Workshop from "../models/workshop_model.js";

export const store = async (req, res) => {
  try {
    const workshop = await Workshop.create(req.body);
    res.status(201).json(workshop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const index = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const show = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id).populate(
      "maintenances"
    ); 
    if (!workshop)
      return res.status(404).json({ message: "Workshop not found" });
    res.status(200).json(workshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!workshop)
      return res.status(404).json({ message: "Workshop not found" });
    res.status(200).json(workshop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.id);
    if (!workshop)
      return res.status(404).json({ message: "Workshop not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
