import React from "react";
import Navbar from "./components/navbar/Navbar";
import Events from "./pages/Events/Events.page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Events />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
