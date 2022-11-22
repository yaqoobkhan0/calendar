import "./App.css";
import Contest from "./Components/Contest";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import details from "./Context";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async (_) => {
      const response = await axios("https://kontests.net/api/v1/all");
      const newData = response.data;
      setData(newData);
    })();
  }, []);

  return (
    <div className="App">
      <details.Provider value={data}>
        <Routes>
          <Route path="/" element={<Contest />} />
        </Routes>
      </details.Provider>
    </div>
  );
}

export default App;
