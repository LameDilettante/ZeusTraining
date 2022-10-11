const express = require("express");
const path = require("path");
const app = express(); // create express app
const db = require("./querymodel");

//adding middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 5000
app.listen(3000, () => {
  console.log("server started on port 3000");
});

//Transcribing data
app.get("/", (req, res) => {
  res.json({ info: "Data fetched" });
});

app.get("/carddata", db.getCardData);
app.get("/roledata", db.getRoleData);
app.get("/description", db.getDescription);
