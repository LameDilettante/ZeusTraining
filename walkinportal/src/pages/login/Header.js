import React from "react";
import navlogo from "../../Assets/logo used in header.svg";

export default function Header() {
  return (
    <div id="header-pattern">
      <img src={navlogo} alt="Quantum logo" id="logo-in-header" />
    </div>
  );
}
