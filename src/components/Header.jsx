import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/">Student Portal</Link>
          </h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              List
            </Link>
            <Link
              to="/student/:id"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Details
            </Link>
            <Link
              to="add"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Add Student
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
