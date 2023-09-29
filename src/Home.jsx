import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ singData, setSingData, sData, setSData, sEdit, setSEdit }) => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2 style={{ marginBottom: "15px" }}>Create New Student</h2>
      <input
        type="text"
        value={singData.firstName}
        onChange={(e) => {
          setSingData({ ...singData, firstName: e.target.value });
        }}
        className="txt"
        placeholder="Enter FirstName"
      />
      <input
        type="text"
        value={singData.lastName}
        onChange={(e) => {
          setSingData({ ...singData, lastName: e.target.value });
        }}
        className="txt"
        placeholder="Enter LastName"
      />
      <input
        type="date"
        value={singData.date}
        onChange={(e) => {
          setSingData({ ...singData, date: e.target.value });
        }}
        className="date"
      />
      <input
        type="text"
        value={singData.addr}
        onChange={(e) => {
          setSingData({ ...singData, addr: e.target.value });
        }}
        className="txt"
        placeholder="Enter Address"
      />
      {sEdit ? (
        <button
          className="bBtn"
          onClick={() => {
            setSData(
              sData.filter((val) => {
                if (val.id == singData.id) {
                  console.log(val.date);
                  let dt = singData.date.split("-");
                  (val.firstName = singData.firstName),
                    (val.lastName = singData.lastName),
                    (val.addr = singData.addr),
                    (val.date = new Date(dt[0], dt[1], dt[2]));
                  return val;
                }
                return val;
              })
            );
            setSingData({
              ...singData,
              id: sData.length + 1,
              firstName: "",
              lastName: "",
              date: new Date(),
              addr: "",
            });
            setSEdit(false);
            navigate("/students");
          }}
        >
          UPDATE
        </button>
      ) : (
        <button
          className="bBtn"
          onClick={() => {
            let dt = singData.date.split("-");
            console.log(singData.date.split("-"));
            setSData([
              ...sData,
              { ...singData, date: new Date(dt[0], dt[1], dt[2]) },
            ]);
            setSingData({
              ...singData,
              id: singData.id + 1,
              firstName: "",
              lastName: "",
              date: new Date(),
              addr: "",
            });
            console.log(sData);
            navigate("/students");
          }}
        >
          SUBMIT
        </button>
      )}
    </div>
  );
};

export default Home;
