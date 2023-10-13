import { useState } from "react";
import "./styles/styles.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateBusiness from "./pages/CreateBusiness";
import CreateId from "./pages/CreateId";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />

      <Routes>
        <Route
          path="/createbusiness"
          element={
            <ProtectedRoute>
              <CreateBusiness />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createId"
          element={
            <ProtectedRoute>
              <CreateId />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createid" element={<CreateId />} />

        {/* <Route path="createbusiness" element={<CreateBusiness />} /> */}
        {/* <Route exact path="trips/:pageNumber" element={<Trips />} />
        <Route exact path="stations/:pageNumber" element={<Stations />} />
        <Route exact path="viewstation/:stationID" element={<Viewstation />} />  */}
      </Routes>
    </div>
  );
}

export default App;
