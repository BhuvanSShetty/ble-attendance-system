// frontend/src/App.js
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await axios.get("http://localhost:5001/attendance");
      setAttendance(res.data);
    } catch (error) {
      console.error("Failed to fetch attendance:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Attendance Dashboard</h1>
      {attendance.length > 0 ? (
        attendance.map((record) => (
          <div key={record._id} className="bg-white p-4 mb-3 shadow rounded">
            <h2 className="font-semibold mb-2">
              {new Date(record.date).toLocaleString()}
            </h2>
            <p className="text-sm text-gray-600 mb-2">Total Present: {record.usns.length}</p>
            <ul className="list-disc pl-5">
              {record.usns.map((usn) => (
                <li key={usn}>{usn}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No attendance records found. Run the simulator to mark attendance!</p>
      )}
    </div>
  );
}

export default App;