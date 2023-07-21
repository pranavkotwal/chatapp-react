import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Chat from '../components/Chat'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/chat/:id" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
