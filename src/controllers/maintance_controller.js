import Maintenance from '../models/maintence_model.js';


export const store = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const index = async (req, res) => {
  try {
    const maintenances = await Maintenance.find().populate("workshop").populate("vehicle");
    res.status(200).json(maintenances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const show = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id)
      .populate("workshop")
      .populate("vehicle");
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance not found" });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance not found" });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
