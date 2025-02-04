import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RichTextEditor from "./components/RichTextEditor";
import Counter from "./components/counter";
import UserForm from "./components/UserForm";
import Navbar from "./components/NavBar"; // Import Navbar

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<RichTextEditor />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
