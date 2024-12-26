const { get } = require("http");
const mongoose = require("mongoose");
const express = require("express");
const CORS = require("cors");
const { profile } = require("console");
const morgan = require("morgan");
const fs = require("node:fs");
const path = require("node:path");

let app = express();
app.use(CORS());
// app.use(morgan("combined"));

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/StudentsBatches", async (req, res) => {
  let studentsBatches = await Student.distinct("batch");
  res.json(studentsBatches);
});

app.get("/StudentsGender", async (req, res) => {
  let studentGender = await Student.distinct("Gender");
  res.json(studentGender);
});

app.get("/StudentList", async (req, res) => {
  console.log(req.query);
  let studentsArr = await Student.find().and([
    {
      batch: req.query.batch,
    },
    {
      Gender: req.query.Gender,
    },
  ]);
  res.json(studentsArr);
});

let mwf1 = (res, req, next) => {
  console.log("inside mwf1");
  next();
};

let mwf2 = (res, req, next) => {
  console.log("inside mwf2");
  next();
};

app.use(mwf1);
app.use(mwf2);
app.get("/StudentList/:batch/:Gender", async (req, res) => {
  console.log(req.params);
  let studentsArr = await Student.find()
    .and([
      {
        batch: req.params.batch,
      },
      {
        Gender: req.params.Gender,
      },
    ])
    .sort(req.query.order == "asc" ? "age" : "-age")
    .limit(req.query.limit);
  res.json(studentsArr);
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
    type: Number,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
    // enum: ["Male", "Female"],
  },
  profile: {
    type: String,
    required: true,
  },
});

let Student = new mongoose.model("students", studentSchema, "2020Students");

app.listen(32232, () => {
  console.log("Server is running on port 32232");
});

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
