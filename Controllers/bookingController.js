import Booking from "../Models/bookingModel.js";
import sendEmail from "../Utils/mailer.js";

export const bookservice = async (req, res) => {
  try {
    const { service, date } = req.body;
    const booking = new Booking({ user: req.user._id, service, date });
    await booking.save();
    await sendEmail(
      req.user.email,
      "Service Booking Confirmation",
      `Your booking for service ID ${service} is confirmed for ${date}.`
    );
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
