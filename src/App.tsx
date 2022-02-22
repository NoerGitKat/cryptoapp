import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <main className="App">
      <Navbar name="Cryptoverse" />
    </main>
  );
}

export default App;
