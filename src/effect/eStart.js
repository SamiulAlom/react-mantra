import React from "react";
import { useState, useEffect } from "react";
import "./effect.css";
import { Head } from "./head";

export const Start = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(1);
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      document.title = `${state} ${state > 1 ? "persons" : "person"}`;
    }
    getData();
  }, [state]);
  return (
    <div>
      <Head />
      <button onClick={() => setState(state + 1)}>Add {state}</button>
      {data.map((e, key) => {
        return (
          <div className="data" key={key}>
            <h4>firstName: {e.firstName}</h4>
            <h4>lastName: {e.lastName}</h4>
            <h4>email: {e.email}</h4>
            <h4>age: {e.age}</h4>
          </div>
        );
      })}
    </div>
  );
};
