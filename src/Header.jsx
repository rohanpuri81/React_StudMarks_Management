import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>
        <Link to={"/"} style={{ color: "black" }}>
          Sinhagad Institute
        </Link>
      </h1>
      <div className="btns">
        <button
          onClick={() => {
            navigate("/students");
          }}
          className="sBtn"
        >
          <Link style={{ textDecoration: "none" }}>Student List</Link>
        </button>
        <button
          onClick={() => {
            navigate("/marks");
          }}
          className="sBtn"
        >
          <Link style={{ textDecoration: "none" }}>Marks List</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
