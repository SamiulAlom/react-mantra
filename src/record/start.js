import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { createContext, useState } from "react";
import { Head, Foot } from "./header";
import { Data } from "./output";
import { Show } from "./showdata";
export const AppContext = createContext();
export const Start = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    const add = {
      name: name,
      email: email,
      phone: phone,
    };
    const newAddData = [...data, add];
    setData(newAddData);
    // setData([...data, { name, email, phone }]);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div className="start">
      <AppContext.Provider value={{ data, setData }}>
        <Head />
        {/* { form } */}
        <div className="form">
          <Stack spacing={3} direction="row">
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="phone"
              label="Phone"
              variant="outlined"
            />
            <button onClick={addData} className="btn">
              <PersonAddIcon />
            </button>
          </Stack>
        </div>
        {/* { output } */}
        <Data />
        {data.map((e, key) => {
          return (
            <Show
              name={e.name}
              index={key}
              email={e.email}
              phone={e.phone}
              key={key}
            />
          );
        })}
        <Foot />
      </AppContext.Provider>
    </div>
  );
};
