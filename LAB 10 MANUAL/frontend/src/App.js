import React, { useState, useEffect } from "react";
import OnePieceBg from "./components/OnePieceBg";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <OnePieceBg>
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </OnePieceBg>
  );
};

export default App;
