const { get } = require("http");
const mongoose = require("mongoose");
const express = require("express");
const CORS = require("cors");
const { profile } = require("console");

let app = express();
app.use(CORS());

app.get("/StudentList", async (req, res) => {
  let studentsArr = await Student.find();
  res.json(studentsArr);
});

app.listen(32232, () => {
  console.log("Server is running on port 32232");
});

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z][a-zA-Z\s'-]{1,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email id`,
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z][a-zA-Z\s'-]{1,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email id`,
    },
  },
  age: {
    type: Number,
    min: [13, "Age should be greater than 13"],
    max: [20, "Age should be less than 20"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email id`,
    },
  },
  batch: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["male", "female", "others"],
  },
  profile: {
    type: String,
    required: true,
  },
});

let Student = new mongoose.model("students", studentSchema, "2020Students");

let connecttoMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Manoj:M123@cluster0.fufvh.mongodb.net/MERNDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error in connecting to MongoDB: ");
  }
};

connecttoMDB();
