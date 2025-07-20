import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDetails from "./pages/StudentDetails";
import Layout from "./Layout";
import StudentList from "./pages/StudentLIst";
import EditForm from "./pages/EditStudent";
import EditStudent from "./pages/EditStudent";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<StudentList />} />
            <Route path="add" element={<AddStudent />} />
          </Route>
          <Route path="edit/:id" element={<EditStudent />} />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
