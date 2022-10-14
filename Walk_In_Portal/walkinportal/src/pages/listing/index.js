import React from "react";
import Header from "../../Components/Header";
import Card from "./card";
import "./card.css";
import "./index.css";
import "../../Components/Header.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Listing() {
  const [CardData, setCardData] = useState([]);
  const [RoleData, setRoleData] = useState([]);

  const fetchdata = async () => {
    try {
      const data = await fetch("http://localhost:5000/carddata", {
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

  const map = new Map(RoleData.map(({ id, role }) => [id, { id, role }]));

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

  const cardelements = merge(CardData, array);
  cardelements.map(function (item, index) {
    return (
      <>
        <Card
          key={item.id}
          title={item.title}
          ////date func
          //dates={item.dates}
          location={item.location}
          ////role func
          //role1={item.role}
          ////daysleft func
          //daysleft={item.daysleft}
          internship={item.internship}
        />
      </>
    );
  });

  return (
    <div className="listing">
      <Header />
      <div className="main">{cardelements}</div>
    </div>
  );
}
