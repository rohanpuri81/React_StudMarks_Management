import React, { useContext } from "react";
import { SD } from "./App";
import { useParams, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  let { sData, setSData, singData, setSingData } = useContext(SD);
  let { id } = useParams();
  return (
    <div className="users">
      {sData.map((val, ind) => {
        if (val.id == id) {
          return (
            <div key={ind}>
              <h2>First Name : {val.firstName}</h2>
              <h2>Last Name : {val.lastName}</h2>
              <h2>
                DOB : {val.date.getDate()}/{val.date.getMonth()}/
                {val.date.getFullYear()}
              </h2>
              <h2>Address : {val.addr}</h2>
              <button
                style={{
                  margin: "5px 30px",
                  width: "260px",
                  border: "none",
                  padding: "10px 14px",
                  backgroundColor: "skyblue",
                }}
                onClick={() => {
                  setSingData({
                    ...singData,
                    id: val.id,
                    firstName: val.firstName,
                    lastName: val.lastName,
                    addr: val.addr,
                    date: val.date,
                    marks: {
                      Marathi: val.marks.Marathi,
                      English: val.marks.English,
                      Geo: val.marks.Geo,
                      History: val.marks.History,
                    },
                  });
                  console.log(singData);
                  navigate("/marksform");
                }}
              >
                Add Marks
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Users;
