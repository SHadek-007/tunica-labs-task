import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ViewStudent = () => {
  const {
    data: allStudents,
    isLoading,
    refetch,
  } = useQuery("allStudents", () =>
    fetch(`http://localhost:5000/allStudents`)
      .then((res) => res.json())
      .then((data) => data)
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/student/${id}`, { method: "DELETE" }).then(
      (res) => {
        toast("Successfully deleted");
        refetch();
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-red-500 mb-8 text-xl font-medium">View Student</h1>

      <div>
        <div className=" overflow-x-auto rounded-sm">
          <table className="w-full text-sm text-left">
            <thead className="font-main text-white font-semibold text-base bg-red-800">
              <tr>
                <th className="px-6 py-4">ID’V</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">School</th>
                <th className="px-6 py-4">Class</th>
                <th className="px-6 py-4">Divison</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="font-main text-base border-x-2 border-b-2">
              {allStudents.map((student, index) => (
                <tr className="hover:bg-[#f5d7db] border" key={student._id}>
                  <td className="px-6 py-4 border">{index + 1}</td>
                  <td className="px-6 py-4 border">{student.name}</td>
                  <td className="px-6 py-4 border">{student.age}</td>
                  <td className="px-6 py-4 border">{student.school}</td>
                  <td className="px-6 py-4 border">{student.classes}</td>
                  <td className="px-6 py-4 border">{student.divison}</td>
                  <td className="px-6 py-4 border">{student.status}</td>
                  <td className="px-6 py-4 border text-blue-700 underline cursor-pointer">
                    <Link to={"/dashboard/" + student._id}>Edit</Link>
                  </td>
                  <td
                    className="px-6 py-4 border text-blue-700 underline cursor-pointer"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
