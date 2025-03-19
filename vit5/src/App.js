import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotHome from "./components/NotHome/NotHome";
import useState from "react";
import useEffect from "react"; 


const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const Home = () => <div style={centerStyle}><h1>Home Page</h1></div>;
//const NotHome = () => <div style={centerStyle}><h1>Not Home Page</h1></div>;
const MyWeb = () => <div style={centerStyle}><h1>My Website Yay!</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyWeb />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-home" element={<NotHome />} />
      </Routes>
    </Router>
  );
}

export default App;
