import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState("");
  const [divison, setDivison] = useState("");
  const [status, setStatus] = useState("Active");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
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
  const handleForm = (e) =>{
    e.preventDefault();
    const students = { name, age, date, school, classes, divison, status };
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Add Student Successfully");
      });
  };

  return (
    <div>
      <h2 className="text-red-500 mb-8 text-xl font-medium">Add Student</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <form onSubmit={handleForm}>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-16">
              <label>Full Name</label>
              <input
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleName}
              />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[113px] mt-5">
              <label>Age</label>
              <input
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleAge}
              />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-10 mt-5">
              <label>Date Of Birth</label>
              <input
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                type="date"
                name="date"
                placeholder="Name"
                onChange={handleDate}
              />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[92px] mt-5">
              <label>School</label>
              <select
                onChange={handleSchool}
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                name="school"
              >
                <option value="select">Select</option>
                <option value="s1">s1</option>
                <option value="s2">s2</option>
              </select>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[105px] mt-5">
              <label>Class</label>
              <select
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                name="classes"
                onChange={handleClasses}
              >
                <option value="select">Select</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[88px] mt-5">
              <label>Divison</label>
              <select
                className="border w-96 py-3 rounded outline-0 px-5 bg-gray-200"
                name="divison"
                onChange={handleDivison}
              >
                <option value="select">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[88px] mt-5">
              <label>Status</label>
              <div className="flex gap-x-5">
                <input
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  type="radio"
                  name="status"
                  value="Active"
                />
                <label htmlFor="status">Active</label>
              </div>
              <div className="flex gap-x-5">
                <input
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  type="radio"
                  name="status"
                  value="Invoice"
                />
                <label htmlFor="status">Invoice</label>
              </div>
            </div>
            <input
              className="bg-red-800 w-56 px-10 py-2 text-white rounded md:ml-[148px] mt-7 cursor-pointer hover:bg-red-900"
              type="submit"
              value="Save"
            />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AddStudent;
