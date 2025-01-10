const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const app = express();
const morgan = require("morgan");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

app.use(morgan("combined", { stream: accessLogStream }));

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
const ConnecttoMDB = async () => {
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

// Mongoose Schema and Model
let userSchema = new mongoose.Schema({
  employee_id: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone_number: { type: String },
  dob: { type: String },
  age: { type: Number },
  department: { type: String },
  gender: { type: String },
  designation: { type: String },
  city: { type: String },
  joining_date: { type: String },
  profile_image: { type: String },
  password: { type: String },
});

let User = mongoose.model("users", userSchema, "users");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Signup API
app.post("/signup", upload.single("profileImage"), async (req, res) => {
  console.log(req.body);
  console.log("File:", req.file);

  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ status: "failed", msg: "Profile image is required." });
    }

    let newUser = new User({
      employee_id: req.body.employee_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      age: req.body.age,
      department: req.body.department,
      gender: req.body.gender,
      designation: req.body.designation,
      joining_date: req.body.joining_date,
      email: req.body.email,
      phone_number: req.body.phone_number,
      city: req.body.city,
      profile_image: req.file.path,
      password: req.body.password,
    });

    await User.insertMany([newUser]);
    res.json({ status: "success", msg: "User Data Inserted Into Database" });
    console.log("User Data Inserted Into Database");
  } catch (err) {
    res.status(500).json({
      status: "failed",
      msg: "Unable to create user data in the database",
    });
    console.log("Unable to insert data into database:", err);
  }
});

// // validatetoken
app.post("/validatetoken", upload.none(), async (req, res) => {
  console.log(req.body);

  let DecrptedData = jwt.verify(req.body.token, "mmk");
  console.log(DecrptedData);

  let userArr = await User.find().and({
    employee_id: DecrptedData.employee_id,
  });
  if (userArr.length > 0) {
    if (userArr[0].password === DecrptedData.password) {
      let dataToSend = {
        first_name: userArr[0].first_name,
        last_name: userArr[0].last_name,
        dob: userArr[0].dob,
        department: userArr[0].department,
        email: userArr[0].email,
        phone_number: userArr[0].phone_number,
        city: userArr[0].city,
        designation: userArr[0].designation,
        profile_image: userArr[0].profile_image,
        joining_date: userArr[0].joining_date,
        employee_id: userArr[0].employee_id,
      };

      res.json({ status: "success", msg: "User Found", data: dataToSend });
      console.log(dataToSend);
    } else {
      res.json({ status: "failed", msg: "Password Incorrect" });
    }
  } else {
    res.json({ status: "failed", msg: "User Not Found" });
  }
});

//datato send to frontend

app.post("/login", upload.none(), async (req, res) => {
  console.log(req.body);
  let userArr = await User.find().and({
    employee_id: req.body.employee_id,
  });
  if (userArr.length > 0) {
    if (userArr[0].password === req.body.password) {
      let token = jwt.sign(
        { employee_id: req.body.employee_id, password: req.body.password },
        "mmk"
      );

      let dataToSend = {
        first_name: userArr[0].first_name,
        last_name: userArr[0].last_name,
        dob: userArr[0].dob,
        department: userArr[0].department,
        email: userArr[0].email,
        phone_number: userArr[0].phone_number,
        city: userArr[0].city,
        designation: userArr[0].designation,
        profile_image: userArr[0].profile_image,
        joining_date: userArr[0].joining_date,
        employee_id: userArr[0].employee_id,
        token: token,
      };

      res.json({ status: "success", msg: "User Found", data: dataToSend });
      console.log(dataToSend);
    } else {
      res.json({ status: "failed", msg: "Password Incorrect" });
    }
  } else {
    res.json({ status: "failed", msg: "User Not Found" });
  }
});

// Server
app.listen(3001, () => {
  console.log("Server is running at port 3001");
});

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
