import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ViewStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState("");
  const [divison, setDivison] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const { data, isLoading, refetch } = useQuery("allStudents", () =>
  //   fetch(`http://localhost:5000/allStudents`)
  //     .then((res) => res.json())
  //     .then((data) => data)
  // );

  const fetchAll = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/allStudents`)
      .then((res) => res.json())
      .then((data) => setAllStudents(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleClasses = (e) => {
    setClasses(e.target.value);
  };
  const handleDivison = (e) => {
    setDivison(e.target.value);
  };
  const handleForm = (e) => {
    console.log("working");
    e.preventDefault();
    const students = { name, age, school, classes, divison };
    fetch("http://localhost:5000/students/query", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllStudents(data)
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/student/${id}`, { method: "DELETE" }).then(
      (res) => {
        toast("Successfully deleted");
        // refetch();
        fetchAll();
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

      <div className="mb-10">
        <form
          onSubmit={handleForm}
          className="grid grid-cols-1 lg:grid-cols-6 gap-5"
        >
          <input
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleName}
          />

          <input
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleAge}
          />

          <select
            onChange={handleSchool}
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="school"
          >
            <option value="select">School</option>
            <option value="s1">s1</option>
            <option value="s2">s2</option>
          </select>

          <select
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="classes"
            onChange={handleClasses}
          >
            <option value="select">Class</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <select
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="divison"
            onChange={handleDivison}
          >
            <option value="select">Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
          </select>
          <button className="bg-red-800 text-white px-4 py-2 rounded">
            Search
          </button>
        </form>
      </div>

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
