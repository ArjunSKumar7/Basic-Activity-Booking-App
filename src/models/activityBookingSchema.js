import mongoose from "mongoose";

const activityBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

const ActivityBooking = mongoose.model("ActivityBooking", activityBookingSchema);
export default ActivityBooking;
