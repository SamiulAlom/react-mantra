import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { useContext } from "react";
import { RecoverData } from "./showdata";

export const Recover = (props) => {
  const { deletedData, setDeletedData } = useContext(RecoverData);
  // const removeUser = (e) => {
  //   const array = deletedData;
  //   array.splice(e, 1);
  //   setDeletedData([...array]);
  // };
  const removeUser = (e) => {
    const updatedData = deletedData.filter((user, index) => index !== e);
    setDeletedData(updatedData);
  };

  return (
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
  );
};
