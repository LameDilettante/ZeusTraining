import React from "react";
import Card from "./card";
import Carddata from "./carddata";
import Header from "../../Components/Header";
import "./card.css";
import "./index.css";
import "../../Components/Header.css";

export default function Listing() {
  const cardelements = Carddata.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        dates={item.dates}
        location={item.location}
        role1={item.role1}
        role2={item.role2}
        role3={item.role3}
        daysleft={item.daysleft}
        internship={item.internship}
      />
    );
  });
  return (
    <div className="listing">
      <Header />
      <div className="main">{cardelements}</div>
    </div>
  );
}
