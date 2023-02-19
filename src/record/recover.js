import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

export const Recover = ({
  name,
  email,
  phone,
  index,
  deletedData,
  setDeletedData,
}) => {
  const removeUser = (e) => {
    const array = deletedData;
    array.splice(e, 1);
    setDeletedData([...array]);
  };

  return (
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
  );
};
