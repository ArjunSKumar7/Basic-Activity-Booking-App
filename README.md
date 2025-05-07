Basic Activity Booking App

A simple Node.js application that enables users to sign up, log in, browse activities, and book them. This app uses JWT-based authentication and is deployed on Vercel.

🔗 Live Demo
🔹 Visit: https://basic-activity-booking-app-6fzl.vercel.app

📁 Project Structure
Your project directory is organized as follows:


src/
├── authService/         → JWT utilities
├── config/              → Database and server config
├── controllers/         → Business logic
├── middlewares/         → Custom middleware (JWT auth, validation)
├── models/              → Mongoose schemas
├── routes/              → Express routes
├── seed/                → Initial activity data
├── validators/          → Input validation using express-validator
└── index.js             → Server entry point
🚀 Features
User Signup & Login (JWT-based authentication)

Input validation with express-validator

Activity listing and booking

User-specific booking history

MongoDB database

Vercel deployment

🛠️ Technologies Used
Node.js

Express

MongoDB & Mongoose

JWT for Authentication

bcryptjs for password hashing

express-validator for input validation

Vercel for deployment

📦 Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/ArjunSKumar7/Basic-Activity-Booking-App.git
cd basic-activity-booking-app
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

makefile
Copy
Edit
.env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8000
JWT_EXPIRATION=1d
Run the app locally:

bash
Copy
Edit
npm start
The server will run on http://localhost:8000

🔐 API Endpoints
🟢 Public:

POST /api/auth/user/signup — Create user account

POST /api/auth/user/login — Log in and get JWT token

🔒 Protected (requires Authorization: Bearer TOKEN):

GET /api/user/getAllActivities — List all available activities

POST /api/user/bookActivity — Book an activity

GET /api/user/getBookedActivities — Get bookings for the logged-in user

✅ Validation Rules
Defined in src/validators/authValidator.js

Signup:

email: valid format

password: min 6 characters

name & mobile: required

Login:

email & password: required

🌱 Seeding Activities
On first run, the app auto seeds initial activities into MongoDB using the script in src/seed/seedData.js. It skips seeding if data already exists.

📦 Vercel Deployment
vercel.json:

json
Copy
Edit
{
  "version": 2
}
Your app auto deploys via Vercel and is accessible at:

https://basic-activity-booking-app-6fzl.vercel.app

🧪 Testing with Postman
📄 API Documentation: https://documenter.getpostman.com/view/44758697/2sB2j7epgR

Include Bearer token in Authorization header for protected routes.

Use correct JSON body format for requests.

👤 Author
Made with ❤️ by Arjun S Kumar
