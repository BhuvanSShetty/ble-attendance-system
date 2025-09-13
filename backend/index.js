// backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ble-attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Schemas
const studentSchema = new mongoose.Schema({
    usn: String,
    name: String
});

const attendanceSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    usns: [String]
});

const Student = mongoose.model("Student", studentSchema);
const Attendance = mongoose.model("Attendance", attendanceSchema);

// Routes
app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Student added", student });
});

app.post("/attendance/mark", async (req, res) => {
    const { usns } = req.body;
    const attendance = new Attendance({ usns });
    await attendance.save();
    res.json({ message: "Attendance marked", attendance });
});

app.get("/attendance", async (req, res) => {
    const records = await Attendance.find().sort({ date: -1 });
    res.json(records);
});

app.listen(5001, () => console.log("✅ Server running on http://localhost:5001"));