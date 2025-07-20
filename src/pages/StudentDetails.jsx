import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  console.log("URL param id:", id);

  const student = useSelector((state) => {
    console.log("Students list:", state.students.list);
    return state.students.list.find((s) => s.id === Number(id));
  });
  console.log("Student found:", student);

  if (!student) {
    return (
      <p className="text-center text-red-600 font-semibold bg-red-100 border border-red-300 px-4 py-2 rounded">
        🚫 Click the <span className="underline">View</span> button to see
        student details.
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          ← Back to Student List
        </Link>
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl bg-white shadow-lg rounded-lg">
      <h2 className="text-lg text-gray-700 mb-2 flex items-center">
        📑 Welcome to the{" "}
        <span className="font-semibold ml-1">Student Details Page!</span> Here
        you can view and edit student information.
      </h2>

      <h1 className="text-3xl font-bold mb-6 text-blue-700">Student Details</h1>

      <div className="space-y-2 text-gray-800">
        <p>
          <strong className="font-semibold">ID:</strong> {student.id}
        </p>
        <p>
          <strong className="font-semibold">Name:</strong> {student.name}
        </p>
        <p>
          <strong className="font-semibold">Email:</strong> {student.email}
        </p>
        <p>
          <strong className="font-semibold">Street:</strong>{" "}
          {student.address.street}
        </p>
        <p>
          <strong className="font-semibold">City:</strong>{" "}
          {student.address.city}
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          ← Back to Student List
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;
