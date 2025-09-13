// ble-simulator/simulate.js
const axios = require("axios");

const usns = Array.from({ length: 30 }, (_, i) => `1RV23CS${String(i + 1).padStart(3, "0")}`);

const markAttendance = async () => {
  console.log("Simulating BLE broadcast and marking attendance on port 5001...");
  try {
    const res = await axios.post("http://localhost:5001/attendance/mark", { usns });
    console.log("✅ Attendance marked successfully for", res.data.attendance.usns.length, "students.");
  } catch (err) {
    console.error("❌ Error marking attendance:", err.message);
    console.error("Please ensure the backend server is running on http://localhost:5001");
  }
};

markAttendance();