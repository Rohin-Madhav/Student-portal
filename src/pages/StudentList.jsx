import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import apiUrl from "../Api/Api";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStudents } from "../redux/studentSlice";

function StudentList() {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}`)
      .then((response) => {
        dispatch(setStudents(response.data));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">The List Of Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.email} </td>
                <td className="py-2 px-4 border-b text-center space-x-2">
                  <Link
                    to={`/student/${student.id}`}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${student.id}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(student.id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
