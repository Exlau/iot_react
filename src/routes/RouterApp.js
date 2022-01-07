import React from "react";
import {Route, Routes, Navigate} from "react-router";
import auth from "../auth";
import App from "./App";
import Login from "../pages/Login";
import Stream from "../pages/Stream";
import "./RouterApp.css";

const RouterApp = (props) => {
  return auth() ? (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/index/*" element={<App />} />
        <Route path="*" element={<Navigate to="/index/dashboard/home" />} />
      </Routes>
    </>
  ) : (
    <Login />
  );
};
export default RouterApp;
