import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { Recover } from "./recover";
import { createContext, useContext, useState } from "react";
import { AppContext } from "./start";

export const RecoverData = createContext();

export const Show = (props) => {
  const { data, setData } = useContext(AppContext);
  const [deletedData, setDeletedData] = useState([]);

  const removeUser = (e) => {
    const deletedUser = data[e];
    const array = data;
    array.splice(e, 1);
    setData([...array]);
    setDeletedData([...deletedData, deletedUser]);
  };

  return (
    <RecoverData.Provider value={{ deletedData, setDeletedData }}>
      <div style={{ marginTop: "10px" }} className="data">
        <div className="data-head">
          <h3 style={{ width: "20%" }}>{props.name}</h3>
          <h3 style={{ width: "35%" }}>{props.email}</h3>
          <h3 style={{ width: "20%" }}>{props.phone}</h3>

          <button
            onClick={() => {
              removeUser(props.index);
            }}
            style={{
              width: "10%",
              textAlign: "center",
              color: "#273c75",
              background: "white",
              border: "1px solid white",
              borderRadius: "5px",
            }}
          >
            <AutoDeleteIcon />
          </button>
        </div>
      </div>
      {deletedData.map((e, key) => {
        return (
          <Recover
            name={e.name}
            index={key}
            email={e.email}
            phone={e.phone}
            key={key}
          />
        );
      })}
    </RecoverData.Provider>
  );
};
