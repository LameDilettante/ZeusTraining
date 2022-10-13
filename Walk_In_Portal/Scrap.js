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