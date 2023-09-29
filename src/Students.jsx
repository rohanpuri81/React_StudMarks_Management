import React, { useContext } from "react";
import { SD } from "./App";
import { useNavigate } from "react-router-dom";

const Students = ({ sData, setSData, setSEdit, singData, setSingData }) => {
  const navigate = useNavigate();
  return (
    <div className="students">
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {sData.map((val, ind) => {
            return (
              <tr
                key={ind}
                onClick={() => {
                  navigate(`/users/${val.id}`);
                }}
              >
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>
                  {val.date.getDate()}-{val.date.getMonth()}-
                  {val.date.getFullYear()}
                </td>
                <td>{val.addr}</td>
                <td>
                  <button
                    className="tableBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSEdit(true);
                      setSingData({
                        ...singData,
                        id: val.id,
                        firstName: val.firstName,
                        lastName: val.lastName,
                        date: val.date,
                        addr: val.addr,
                      });
                      navigate("/");
                    }}
                  >
                    UPDATE
                  </button>
                </td>
                <td>
                  <button
                    className="tableBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSData(sData.filter((v, id) => v.id != val.id));
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
