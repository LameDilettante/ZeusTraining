import React from "react";
import Login from "./pages/login/index.js";
import Listing from "./pages/listing/index.js";
import WalkInDetails from "./pages/walk-in-details/index.js";
import AppSucc from "./pages/application-success/index.js";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Login />} />
      <Route path="/job-listing" element={<Listing />} />
      <Route path="/walk-in-details" element={<WalkInDetails />} />
      <Route path="/application-success" element={<AppSucc />} />
    </Routes>
  );
}
