import React from "react";
import { useNavigate } from "react-router-dom";

const MarksForm = ({
  singData,
  setSingData,
  mEdit,
  setMEdit,
  sData,
  setSData,
}) => {
  const navigate = useNavigate();
  return (
    <div className="marksForm">
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Marks Form
      </h2>
      <input
        type="text"
        value={singData.marks.Marathi}
        onChange={(e) => {
          setSingData({
            ...singData,
            marks: { ...singData.marks, Marathi: e.target.value },
          });
        }}
        className="txt"
        placeholder="Marathi"
      />
      <input
        type="text"
        className="txt"
        placeholder="English"
        value={singData.marks.English}
        onChange={(e) => {
          setSingData({
            ...singData,
            marks: { ...singData.marks, English: e.target.value },
          });
        }}
      />
      <input
        type="text"
        value={singData.marks.Geo}
        onChange={(e) => {
          setSingData({
            ...singData,
            marks: { ...singData.marks, Geo: e.target.value },
          });
        }}
        className="txt"
        placeholder="Geo"
      />
      <input
        type="text"
        value={singData.marks.History}
        onChange={(e) => {
          setSingData({
            ...singData,
            marks: { ...singData.marks, History: e.target.value },
          });
        }}
        className="txt"
        placeholder="History"
      />
      <button
        style={{
          border: "none",
          backgroundColor: "skyblue",
          padding: "8px 12px",
          width: "300px",
          marginTop: "8px",
          cursor: "pointer",
        }}
        onClick={() => {
          setSData(
            sData.filter((val, ind) => {
              if (ind + 1 == singData.id) {
                val.marks.Marathi = singData.marks.Marathi;
                val.marks.English = singData.marks.English;
                val.marks.Geo = singData.marks.Geo;
                val.marks.History = singData.marks.History;
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
            marks: {
              Marathi: "",
              English: "",
              Geo: "",
              History: "",
            },
          });
          setMEdit(false);
          navigate("/marks");
        }}
      >
        {mEdit ? "EDIT MARKS" : "SUBMIT"}
      </button>
    </div>
  );
};

export default MarksForm;
