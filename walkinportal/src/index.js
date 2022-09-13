import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./index.css";
//import "./App.css";
import "./Header.css";
import Card from "./card";
import Carddata from "./carddata";
import "./card.css";

function App() {
  const cardelements=Carddata.map(item =>{
    return(
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
    )
  })
  return (
    <div className="App">
      <Header/>
      <div className="main">
      {cardelements}
      </div>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"))
