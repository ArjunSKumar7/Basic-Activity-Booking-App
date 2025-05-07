import User from "../models/userSchema.js";
import Activity from "../models/activitySchema.js";
import ActivityBooking from "../models/activityBookingSchema.js";
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
}
export default userController;
