import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
// import { Recover } from "./recover";
import { createContext, useContext } from "react";
import { AppContext } from "./start";

export const RecoverData = createContext();

export const Show = ({
  name,
  email,
  phone,
  index,
  setDeletedData,
  deletedData,
}) => {
  const { data, setData } = useContext(AppContext);

  const removeUser = (e) => {
    const deletedUser = data[e];
    const array = data;
    array.splice(e, 1);
    setData([...array]);
    setDeletedData([...deletedData, deletedUser]);
  };
  return (
    <RecoverData.Provider>
      <div style={{ marginTop: "10px" }} className="data">
        <div className="data-head">
          <h3 style={{ width: "20%" }}>{name}</h3>
          <h3 style={{ width: "35%" }}>{email}</h3>
          <h3 style={{ width: "20%" }}>{phone}</h3>

          <button
            onClick={() => {
              removeUser(index);
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
    </RecoverData.Provider>
  );
};
