import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dec, Inc } from "./reducers/redu";

export default function Start() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "brown",
        fontSize: "20px",
        flexDirection: "column",
      }}
    >
      <h1>Hello Redux</h1>
      <br />
      <h1>{curState}</h1>
      <br />
      <button onClick={() => dispatch(Inc(10))}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(Dec(5))}>Decrement</button>
    </div>
  );
}
