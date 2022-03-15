import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import "./styles/App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar name="Cryptoverse" />
      </nav>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home name="Global Crypto Stats" />} />
              <Route path="/exchanges" element={<Users />} />
            </Routes>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
}

function Users() {
  return <div>Lorem ips</div>;
}

export default App;
