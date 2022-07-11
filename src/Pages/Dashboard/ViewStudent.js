import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Paginate from "./Paginate";
import { utils, writeFile } from "xlsx";
import { HiDownload } from "react-icons/hi";

const ViewStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState("");
  const [divison, setDivison] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [pages, setPages] = useState(5);
  const [filteredIndeces, setFilteredIndeces] = useState([0, 0]);
  const [currentPage, setCurrentPage] = useState(0);

  const convertJsonToExcel = () => {
    const workSheet = utils.json_to_sheet(allStudents);
    const workBook = utils.book_new();

    utils.book_append_sheet(workBook, workSheet, "students");
    // Download file
    writeFile(workBook, "All_Students.xlsx");
  };

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

  useEffect(() => {
    const pages = Math.ceil(allStudents.length / pageSize);
    setPages(pages);
    const startIndex = currentPage * pageSize;
    const endIndex = currentPage * pageSize + pageSize;
    setFilteredIndeces([startIndex, endIndex]);
  }, [allStudents, currentPage, pageSize]);

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
        setAllStudents(data);
        setCurrentPage(0);
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
            min={0}
            onChange={handleAge}
          />

          <select
            onChange={handleSchool}
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="school"
          >
            <option value="select">School</option>
            <option value="Delhi School">Delhi School</option>
            <option value="Kolkata School">Kolkata School</option>
            <option value="Mumbai School">Mumbai School</option>
            <option value="Chennai School">Chennai School</option>
            <option value="Model School">Model School</option>
          </select>

          <select
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="classes"
            onChange={handleClasses}
          >
            <option value="select">Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <select
            className="border max-w-sm py-3 rounded outline-0 px-5 bg-gray-200"
            name="divison"
            onChange={handleDivison}
          >
            <option value="select">Division</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="F">F</option>
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
              {allStudents
                .slice(filteredIndeces[0], filteredIndeces[1])
                .map((student, index) => (
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
      <div className="flex justify-between mt-4">
        <button
          className="bg-red-800 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={convertJsonToExcel}
        >
          Download Excel <HiDownload />
        </button>
        <Paginate
          data={{
            pages,
            setPages,
            currentPage,
            setCurrentPage,
          }}
        />
      </div>
    </div>
  );
};

export default ViewStudent;
