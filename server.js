const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

// serving static files
// app.use(express.static(path.join(`${__dirname}/public`)));
app.use(express.static("public"));

// connect to MongoDB database
mongoose.connect(
  "mongodb://localhost/i-imazine",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected successfully");
  }
);

// create a schema for users
const projectSchema = new mongoose.Schema({
  industry: String,
  category: String,
  projectTitle: String,
  trimmedTitle: String,
  projectSummary: String,
  overview: String,
  services: [String],
  detailsOfProject: [String],
  imgs: [String],
  socialMediaImgs: [String],
  date: Date,
});

// create a model for users using the schema
const Projects = mongoose.model("projects", projectSchema);

// configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/projectImages");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// configure body-parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// send the HTML form to the client
app.get("/projects", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "project-form.html"));
});

// handle form submission
// app.post(
//   "/api/v1/projects",
//   // upload.array("photos", 4),
//   upload.fields([
//     { name: "photos", maxCount: 4 },
//     { name: "socialMediaImgs", maxCount: 4 },
//   ]),

//   function (req, res, next) {
//     // create a new user object with the submitted data
//     const project = new Projects({
//       industry: req.body.industry,
//       category: req.body.category,
//       projectTitle: req.body.projectTitle,
//       trimmedTitle: req.body.trimmedTitle,
//       projectSummary: req.body.projectSummary,
//       overview: req.body.overview,
//       services: req.body.services,
//       detailsOfProject: req.body.detailsOfProject,

//       imgs: req.files["photos"]?.map(
//         (file) => "/projectImages/" + file.filename
//       ),

//       socialMediaImgs: req.files["socialMediaImgs"]?.map(
//         (file) => "/public/socialMedia/" + file.filename
//       ),

//       date: req.body.date,
//     });

//     // save the user object to the database
//     project.save(function (err) {
//       if (err) {
//         return next(err);
//       }
//       res.send("User created successfully");
//     });
//   }
// );

app.post(
  "/api/v1/projects",
  // upload.array("photos", 4),
  upload.fields([
    { name: "photos", maxCount: 4 },
    { name: "socialMediaImgs", maxCount: 4 },
  ]),
  function (req, res, next) {
    // create a new user object with the submitted data
    const project = new Projects({
      industry: req.body.industry,
      category: req.body.category,
      projectTitle: req.body.projectTitle,
      trimmedTitle: req.body.trimmedTitle,
      projectSummary: req.body.projectSummary,
      overview: req.body.overview,
      services: req.body.services,
      detailsOfProject: req.body.detailsOfProject,

      imgs: req.files["photos"]?.map(
        (file) => "/projectImages/" + file.filename
      ),

      socialMediaImgs: req.files["socialMediaImgs"]?.map(
        (file) => "/public/socialMedia/" + file.filename
      ),

      date: req.body.date,
    });

    // save the user object to the database
    project.save(function (err) {
      if (err) {
        return next(err);
      }
      // redirect to '/projects' after the project is saved successfully
      res.redirect("/projects");
    });
  }
);

app.get("/api/v1/projects", async (req, res) => {
  try {
    const projectsList = await Projects.find();

    res.status(200).json({
      status: "Success!",
      data: {
        projectsList,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
