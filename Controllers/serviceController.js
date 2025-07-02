import Service from "../Models/serviceModel.js";

export const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const service = new Service({ name, description, price });
    await service.save();
    res.status(201).json({ message: "Service created successfully", data: service });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getService = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ message: "Services retrieved successfully", data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updated = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Service.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
