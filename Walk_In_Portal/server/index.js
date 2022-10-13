const express = require("express");
const path = require("path");
const app = express(); // create express app
const db = require("./querymodel");
const port = 5000;

//adding middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => {
  console.log("server started on port", port);
});

//Transcribing data
app.get("/", (req, res) => {
  res.json({ info: "Data fetched" });
});

app.get("/carddata", db.getCardData);
app.get("/roledata", db.getRoleData);
app.get("/walkinroles", db.getWalkInRoles);
