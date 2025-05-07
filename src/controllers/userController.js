import User from "../models/userSchema.js";
import Activity from "../models/activitySchema.js";
import ActivityBooking from "../models/activityBookingSchema.js";
import mongoose from 'mongoose';
const userController={
    bookActivity: async (req, res) => {
        const { userId, activityId } = req.body;
    
        try {
        
          const user = await User.findById(userId);
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
    
        
          const activity = await Activity.findById(activityId);
          if (!activity) {
            return res.status(404).json({ message: "Activity not found" });
          }
    
          
          const existingBooking = await ActivityBooking.findOne({ user: userId, activity: activityId });
          if (existingBooking) {
            return res.status(400).json({ message: "You have already booked this activity" });
          }
    
        
          const newBooking = new ActivityBooking({
            user: userId,
            activity: activityId,
          });
    
          await newBooking.save();
          return res.status(201).json({ message: "Booking successful", booking: newBooking });
    
        } catch (error) {
          return res.status(500).json({ message: "Something went wrong", error });
        }
      },

       getAllActivities :async (req, res) => {
        try {
          const activities = await Activity.find(); 
      
          if (activities.length === 0) {
            return res.status(404).json({ message: "No activities found" });
          }
      
          return res.status(200).json({ activities });
        } catch (error) {
          return res.status(500).json({ message: "Something went wrong", error });
        }
      },
      getUserBookings: async (req, res) => {
        try {
        const userId = req.userId;
        
      
          const bookings = await ActivityBooking.aggregate([
            { $match: { user: new mongoose.Types.ObjectId(userId) } },
            {
              $lookup: {
                from: "activities", 
                localField: "activity",
                foreignField: "_id",
                as: "activityDetails"
              }
            },
            { $unwind: "$activityDetails" },
            {
              $project: {
                _id: 1,
                bookingDate: 1,
                "activityDetails._id": 1,
                "activityDetails.title": 1,
                "activityDetails.description": 1,
                "activityDetails.location": 1,
                "activityDetails.date": 1,
                "activityDetails.time": 1
              }
            }
          ]);
        
          res.json({
            status: 200,
            message: "Bookings fetched successfully",
            bookings
          });
        } catch (err) {
          res.status(500).json({
            status: 500,
            message: `Error fetching bookings: ${err.message}`
          });
        }
        },
    
}
export default userController;
