import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import { stdData } from "./sampData";
import Home from "./Home";
import Students from "./Students";
import Marks from "./marks";
import Users from "./Users";
import MarksForm from "./MarksForm";

export const SD = createContext();
function App() {
  const [singData, setSingData] = useState({
    id: stdData.length + 1,
    firstName: "",
    lastName: "",
    date: "",
    addr: "",
    marks: {
      Marathi: "",
      English: "",
      Geo: "",
      History: "",
    },
  });
  const [mData, setMData] = useState({});
  const [sData, setSData] = useState(stdData);
  const [sEdit, setSEdit] = useState(false);
  const [mEdit, setMEdit] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <SD.Provider value={{ sData, setSData, singData, setSingData }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  singData={singData}
                  setSingData={setSingData}
                  sData={sData}
                  setSData={setSData}
                  sEdit={sEdit}
                  setSEdit={setSEdit}
                />
              }
            />
            <Route
              path="/students"
              element={
                <Students
                  sData={sData}
                  setSData={setSData}
                  setSEdit={setSEdit}
                  singData={singData}
                  setSingData={setSingData}
                />
              }
            />
            <Route
              path="/marks"
              element={
                <Marks
                  sData={sData}
                  setSData={setSData}
                  mEdit={mEdit}
                  setMEdit={setMEdit}
                  singData={singData}
                  setSingData={setSingData}
                />
              }
            />
            <Route path="/users/:id" element={<Users />} />
            <Route
              path="/marksform"
              element={
                <MarksForm
                  singData={singData}
                  setSingData={setSingData}
                  mEdit={mEdit}
                  setMEdit={setMEdit}
                  sData={sData}
                  setSData={setSData}
                />
              }
            />
          </Routes>
        </SD.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
