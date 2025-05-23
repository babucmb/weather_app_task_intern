# 🌦️ Full Stack Weather App

A student-level full-stack weather application that allows users to:

- View current weather data by entering a location
- Save weather details for a date range
- Perform full CRUD (Create, Read, Update, Delete) on stored weather records

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js** – UI components and state handling
- **Axios** – for sending HTTP requests
- **Google Fonts + Inline CSS** – for simple styling

### 🔹 Backend
- **Node.js + Express.js** – REST API handling
- **MongoDB Atlas** – cloud database for storing weather records
- **Mongoose** – MongoDB ODM for schema modeling
- **OpenWeatherMap API** – external weather data source

---

## 🎯 Features

- 🔍 Fetch weather data from OpenWeatherMap
- 📝 Store city, temperature, condition, and custom date ranges
- 🧾 View past saved weather data (from MongoDB)
- ✏️ Update saved records by ID
- ❌ Delete any saved weather entry
- 💡 UI includes background image, Google Fonts, and loading validation

---

## ℹ️ Usage Notes

- ⏳ **Weather Fetch Delay**  
  Sometimes fetching live weather data from the OpenWeatherMap API may take a few seconds due to network or API response time. Please wait patiently while the data is being retrieved.

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
cd express-backend
npm install
````
Create a .env file:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=8080
```
Start the backend:
```bash
node index.js
The backend will run at: http://localhost:8080
```
Set Up the Frontend:
```bash
cd ../frontend
npm install
npm start
The frontend will run at: http://localhost:3000
```
API Routes
| Method | Route          | Description                    |
| ------ | -------------- | ------------------------------ |
| POST   | `/getWeather`  | Fetch live weather from API    |
| POST   | `/weather`     | Store weather record in DB     |
| GET    | `/weather`     | Get all stored weather records |
| PUT    | `/weather/:id` | Update record by ID            |
| DELETE | `/weather/:id` | Delete record by ID            |

Deployment Notes;-
- The backend can be deployed using Render
- The frontend can be deployed using Vercel or Netlify
- Ensure that the backend endpoint (e.g., https://your-api.onrender.com) is used in the frontend instead of localhost

  # Important Notes
Note:
- This project directory may contain older or unused folders like:
backend/
frontend/
- These folders were part of earlier testing and are not required to run the final version of this project.
✅ The correct folders you should use are:
- express-backend/ → Contains the working backend (Node.js + Express + MongoDB)
- frontend/ → Contains the working frontend (React Weather UI)
    Please ignore any duplicate or similarly named folders unless explicitly mentioned.







