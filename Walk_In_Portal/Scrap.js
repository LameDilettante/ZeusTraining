//Udaya's Method

const[Roledata, setRoleData ] = useState([]);

const fetchdata =async()=>{
    try{
        const data = await fetch('http://localhost:5000/carddata',{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result=await data.json();
        //console.log(result);
        setCardData(result.walkin);
        setRoleData(result.walkin_role);
        //console.log(resulwalkin_role);
    }
    catch(err){
        console.log(err);
    }
}
useEffect(()=>{
    fetchdata();
},[])


//using state

import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch

//Adding data in json file

fetch("http://localhost:5000/carddata")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const fs = require("fs");
    fs.writeFile("./carddata.js", JSON.stringify(json), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }
      console.log("JSON written to file. Contents:");
    });
  });


  //Udaya's approach

import React from "react";
import "../css/Header.css";
import Card from "./card";
import "../css/card.css";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [CardData, setCardData] = useState([]);
  const [RoleData, setRoleData] = useState([]);
  const fetchdata = async () => {
    try {
      const data = await fetch("http://localhost:9005/task/fetchdata", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await data.json();
      setCardData(result.getCardData);
      setRoleData(result.getRoleData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const map = new Map(
    RoleData.map(({ walkin_id, roles, imgs }) => [
      walkin_id,
      { walkin_id, roles: [], imgs: [] },
    ])
  );
  for (let { walkin_id, roles, imgs } of RoleData) {
    map.get(walkin_id, imgs).roles.push(...[roles].flat(), ...[imgs].flat());
  }
  const array = [...map.values()];
  for (let i = 0; i < array.length; i++) {
    let len = array[i].roles.length;
    for (let j = 1; j < len; j += 2) {
      array[i].imgs.push(array[i].roles[j]);
    }
    array[i].roles = array[i].roles.filter((el) => !array[i].imgs.includes(el));
  }
  //console.log(array);
  const merge = (CardData, array) => {
    return CardData.map((x) => {
      const y = array.find((item) => x.walkin_id === item.walkin_id);
      if (y) {
        return Object.assign({}, x, y);
      } else return x;
    }).concat(
      array.filter((item) =>
        CardData.every((x) => x.walkin_id !== item.walkin_id)
      )
    );
  };
  const Elements = merge(CardData, array);
  console.log(Elements);

  
  return (
    <>
      {Elements.map(function (val, index) {
        return (
          <>
            <Card
              id={val.walkin_id}
              roles={val.roles}
              imgs={val.imgs}
              title={val.title}
              dates={val.dates}
              location={val.location}
              daysleft={val.daysleft}
              internship={val.internship}
            />
          </>
        );
      })}
    </>
  );
}



//early code

const fetchdata = () => {
  return fetch("localhost:5000/carddata")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
