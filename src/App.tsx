import React from "react";
import Navbar from "./components/navbar/Navbar";
import Events from "./pages/Events/Events.page";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import AddEvent from "./pages/Events/AddEvent.page";
import { eventsAddRoute, eventsRoute, homeRoute } from "./constants/routes";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="wrapper">
        <Routes>
          <Route path={`${homeRoute}`} element={<Home />}></Route>
          <Route path={`${eventsRoute}`} element={<Events />}></Route>
          <Route path={`${eventsAddRoute}`} element={<AddEvent />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
