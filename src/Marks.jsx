import React from "react";
import { useNavigate } from "react-router-dom";

const Marks = ({ sData, setSData, mEdit, setMEdit, singData, setSingData }) => {
  const navigate = useNavigate();
  return (
    <div className="marks">
      <table border={1}>
        <caption>Students Marks</caption>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Marathi</th>
          <th>English</th>
          <th>Geo</th>
          <th>History</th>
          <th>Edit Marks</th>
        </thead>
        <tbody>
          {sData.map((v, ind) => {
            return (
              <tr key={ind}>
                <td>{v.id}</td>
                <td>
                  {v.firstName} {v.lastName}
                </td>
                <td>{v.marks.Marathi}</td>
                <td>{v.marks.English}</td>
                <td>{v.marks.Geo}</td>
                <td>{v.marks.History}</td>
                <td>
                  <button
                    style={{
                      border: "none",
                      width: "100%",
                      backgroundColor: "lightblue",
                      height: "100%",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      setMEdit(true);
                      setSingData({
                        ...singData,
                        id: v.id,
                        firstName: v.firstName,
                        lastName: v.lastName,
                        date: v.date,
                        addr: v.addr,
                        marks: {
                          Marathi: v.marks.Marathi,
                          English: v.marks.English,
                          Geo: v.marks.Geo,
                          History: v.marks.History,
                        },
                      });
                      navigate("/marksform");
                    }}
                  >
                    EDIT
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

export default Marks;
