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
      <Route path="/0" element={<Listing />} />
      <Route path="/1" element={<WalkInDetails />} />
      <Route path="/2" element={<AppSucc />} />
    </Routes>
  );
}
