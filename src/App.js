import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/message" element={<Sidebar />} />
          <Route path="/setting" element={<Sidebar />} />
          <Route path="/logout" element={<Sidebar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
