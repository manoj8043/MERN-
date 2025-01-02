const mongoose = require("mongoose");
let ConnecttoMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Manoj:M123@cluster0.fufvh.mongodb.net/MERNDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error: ", error);
  }
};
ConnecttoMDB();

let userScheme = new mongoose.Schema({
  employee_id: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  dob: {
    type: String,
  },
  age: {
    type: Number,
  },
  department: {
    type: String,
  },
  gender: {
    type: String,
  },
  designation: {
    type: String,
  },
  city: {
    type: String,
  },
  joining_date: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  password: {
    type: String,
  },
});

let User = mongoose.model("users", userScheme, "users");

const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const fs = require("fs");

const path = require("path");
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // console.log(file);

    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/signup", upload.single("profileImage"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    let newUser = new User({
      employee_id: req.body.employee_id,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      dob: req.body.dob,
      age: req.body.age,
      department: req.body.department,
      gender: req.body.gender,
      designation: req.body.designation,
      joining_date: req.body.joiningDate,
      email: req.body.email,
      phone_number: req.body.phone,
      city: req.body.city,
      profile_image: req.file.path,
      password: req.body.password,
    });
    await User.insertMany([newUser]);
    res.json({ status: "success", msg: "User Data Inserted Into Database" });
    console.log("User Data Inserted Into Database");
  } catch (err) {
    res.json({
      status: "failed",
      msg: "unable to creat User Data  Into Database",
    });
    console.log("Unable to insert data Into Database: ", err);
  }
});

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
