import React from "react";
import "./styles/styles.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBusiness from "./pages/CreateBusiness";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Toaster />
      <Header />

      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="*" element={<Register />} />
        <Route path="/" element={<CreateBusiness />} />
        {/* <Route exact path="trips" element={<Trips />} />
        <Route exact path="trips/:pageNumber" element={<Trips />} />
        <Route exact path="stations" element={<Stations />} />
        <Route exact path="stations/:pageNumber" element={<Stations />} />
        <Route exact path="viewstation/:stationID" element={<Viewstation />} /> */}
      </Routes>
    </div>
  );
}

export default App;
