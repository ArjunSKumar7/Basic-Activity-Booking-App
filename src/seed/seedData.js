import Activity from "../models/activitySchema.js";

export const seedActivities = async () => {
  const existing = await Activity.find();
  if (existing.length > 0) {
    console.log("Activities already exist. Skipping seeding.");
    return;
  }

  const sampleActivities = [
    {
      title: "Cricket Match",
      description: "Friendly match between local cricket teams.",
      location: "City Stadium",
      date: new Date("2025-06-01"),
      time: "15:00",
    },
    {
      title: "Football Tournament",
      description: "Under-21 interschool football finals.",
      location: "Greenfield Arena",
      date: new Date("2025-06-05"),
      time: "18:00",
    },
    {
      title: "Movie Night",
      description: "Outdoor screening of classic movies.",
      location: "Central Park",
      date: new Date("2025-06-10"),
      time: "20:30",
    },
    {
      title: "Yoga Workshop",
      description: "Morning yoga session for beginners.",
      location: "Lakeview Garden",
      date: new Date("2025-06-08"),
      time: "07:00",
    },
    {
      title: "Art Exhibition",
      description: "Showcasing local artists and their works.",
      location: "City Art Gallery",
      date: new Date("2025-06-12"),
      time: "10:00",
    },
    {
      title: "Coding Bootcamp",
      description: "Learn full-stack development in a weekend.",
      location: "TechHub Co-working",
      date: new Date("2025-06-15"),
      time: "09:00",
    },
    {
      title: "Live Concert",
      description: "Music festival featuring indie bands.",
      location: "Open Grounds",
      date: new Date("2025-06-20"),
      time: "19:00",
    },
    {
      title: "Cycling Rally",
      description: "City-wide cycling rally to promote fitness.",
      location: "Main Avenue",
      date: new Date("2025-06-18"),
      time: "06:30",
    },
    {
      title: "Drama Play",
      description: "Stage performance by local theater group.",
      location: "Town Hall Auditorium",
      date: new Date("2025-06-22"),
      time: "17:00",
    },
    {
      title: "Photography Walk",
      description: "Capture urban life through your lens.",
      location: "Old City Streets",
      date: new Date("2025-06-25"),
      time: "08:00",
    },
  ];

  await Activity.insertMany(sampleActivities);
  console.log("Sample activities seeded.");
};
