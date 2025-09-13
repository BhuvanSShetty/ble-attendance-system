Secure BLE-Based Attendance System (Simulator Version)
This project is a complete, full-stack prototype of a real-time attendance system. It uses a MERN stack (MongoDB, Express.js, React, Node.js) and includes a Node.js script to simulate the presence of students broadcasting their attendance via Bluetooth Low Energy (BLE).

This simulator version allows for full end-to-end testing of the application's data flow without the need for physical hardware like an ESP32 or a mobile app.

System Architecture
The project is divided into three main components that work together:

Backend (Node.js + Express + MongoDB)

Acts as the central API server.

It listens for incoming attendance data, validates it, and stores it in a MongoDB database.

It also provides an endpoint for the frontend to fetch the attendance records.

Frontend (React + Tailwind CSS)

A clean, simple web dashboard for administrators.

It fetches the attendance records from the backend and displays them in a live, user-friendly list.

BLE Simulator (Node.js)

This script mimics the role of a real-world BLE scanner.

It generates a list of 30 unique student USNs and sends them to the backend's /attendance/mark endpoint in a single HTTP POST request. This simulates a scanner collecting all nearby student signals and uploading the data.

Technology Stack
Backend: Node.js, Express.js, Mongoose, MongoDB, CORS

Frontend: React, Axios, Tailwind CSS

Simulator: Node.js, Axios

Getting Started
Follow these instructions to get the project set up and running on your local machine.

Prerequisites
Node.js and npm: Make sure you have Node.js (v16 or higher) and npm installed.

MongoDB: You must have a MongoDB server instance running on your machine. The project connects to the default address mongodb://127.0.0.1:27017.

Installation
Clone the repository (or ensure your project folder is set up correctly).

Install Backend Dependencies:
Open a terminal, navigate into the backend folder, and run:

cd backend
npm install

Install Frontend Dependencies:
Open a second terminal, navigate into the frontend folder, and run:

cd frontend
npm install

Install Simulator Dependencies:
The simulator only requires axios. If you haven't installed it in the root folder yet, open a third terminal in the main project directory and run:

npm install axios

How to Run the System
To run the full application, you will need three separate terminals open.

Step 1: Start the Backend Server

In your first terminal (inside the backend folder):

npm start

You should see confirmation messages: MongoDB connected and ✅ Server running on http://localhost:5001.

Step 2: Start the Frontend Dashboard

In your second terminal (inside the frontend folder):

npm start

This will automatically open a new tab in your web browser at http://localhost:3000. It will initially show "No attendance records found."

Step 3: Run the BLE Simulator

In your third terminal (at the project's root folder, ble-attendance-system):

node ble-simulator/simulate.js

You will see a success message: ✅ Attendance marked successfully...

Step 4: See the Result

Go back to your web browser tab (http://localhost:3000).

The attendance record for all 30 simulated students will now be visible on the dashboard.

Folder Structure
ble-attendance-system/
├── backend/
│   ├── node_modules/
│   ├── index.js          # The Express server logic
│   └── package.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.js        # The main React component
│   │   └── index.js
│   └── package.json
└── ble-simulator/
    └── simulate.js       # The script to simulate student data
