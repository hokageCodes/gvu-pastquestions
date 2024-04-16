"use client"
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillTrashFill } from 'react-icons/bs';

const faculties = {
  "College of Basic and Applied Sciences": {
    "100L": { "Biology 101": 3, "Chemistry 101": 4 },
    "200L": { "Physics 201": 3, "Mathematics 201": 4 }
  },
  "College of Humanities": {
    "100L": { "History 101": 3, "Literature 101": 4 },
    "200L": { "Philosophy 201": 3, "Arts 201": 4 }
  },
  "College of Law": {
    "100L": { "Law 101": 4, "Civic Law 101": 3 },
    "200L": { "Criminal Law 201": 4, "Constitutional Law 201": 3 }
  }
};

const grades = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 0
};

function CGPACalculator() {
  const [faculty, setFaculty] = useState('');
  const [level, setLevel] = useState('');
  const [courses, setCourses] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  useEffect(() => {
    if (faculty && level) {
      setCourses(faculties[faculty][level]);
    } else {
      setCourses({});
    }
    setSelectedCourse('');
    setSelectedUnit('');
    setSelectedGrade('');
  }, [faculty, level]);

  const addCourse = () => {
    if (!selectedGrade || !selectedCourse || !selectedUnit) {
      toast.error("Please ensure all fields are filled.");
      return;
    }
    const newCourse = {
      id: courseList.length + 1,
      name: selectedCourse,
      grade: grades[selectedGrade],
      unit: parseInt(selectedUnit),
    };
    setCourseList([...courseList, newCourse]);
    setSelectedCourse('');
    setSelectedUnit('');
    setSelectedGrade('');
  };

  const removeCourse = (id) => {
    setCourseList(courseList.filter(course => course.id !== id));
  };

  const calculateCGPA = () => {
    const totalPoints = courseList.reduce((acc, curr) => acc + (curr.grade * curr.unit), 0);
    const totalUnits = courseList.reduce((acc, curr) => acc + curr.unit, 0);
    return (totalUnits === 0) ? 0 : (totalPoints / totalUnits).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-teal-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1 max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-xl font-semibold text-gray-700 text-center">CGPA Calculator - Input Form</h1>
          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Faculty</label>
              <select value={faculty} onChange={e => setFaculty(e.target.value)} className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Faculty</option>
                {Object.keys(faculties).map(fac => (
                  <option key={fac} value={fac}>{fac}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Level</label>
              <select value={level} onChange={e => setLevel(e.target.value)} className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Level</option>
                {faculty && Object.keys(faculties[faculty]).map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <select value={selectedCourse} onChange={e => {
                setSelectedCourse(e.target.value);
                setSelectedUnit(courses[e.target.value]);
              }} className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Course</option>
                {Object.keys(courses).map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Credit Unit</label>
              <input type="text" value={selectedUnit} readOnly className="mt-1 block w-full p-2 bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Grade</label>
              <select value={selectedGrade} onChange={e => setSelectedGrade(e.target.value)} className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Grade</option>
                {Object.keys(grades).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <button onClick={addCourse} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Course</button>
          </div>
        </div>
        <div className="flex-1 max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold text-gray-700 text-center">Course Details & CGPA</h1>
          {courseList.length > 0 ? (
            <div className="mt-6">
              <div className="overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courseList.map((course, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.unit}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Object.keys(grades).find(key => grades[key] === course.grade)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => removeCourse(course.id)} className="text-red-600 hover:text-red-900">
                            <BsFillTrashFill />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="font-bold text-lg">Your CGPA is: {calculateCGPA()}</p>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-center text-gray-500">No courses added yet. Start adding some!</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CGPACalculator;
