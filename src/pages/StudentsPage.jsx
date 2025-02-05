import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Loader from "../components/Loader";
function StudentsPage() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    firebase.listAllStudents().then((students) => {
      setStudentsData(students._snapshot.docChanges);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if (!firebase.isLoggedIn) {
      // navigate to home
      navigate("/login");
    }
  }, [firebase, navigate]);
  return (
    <div className="w-full ms-4 my-6 items-center ">
      <h1 className="font-semibold text-xl ml-44 mb-6">Students Details:</h1>
      <table>
        <thead className="bg-slate-200 ">
          <tr className="">
            <th>Id</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Email</th>
            <th>Roll no</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData ? (
            studentsData.map((item, index) => {
              let student =
                item.doc.data.value.mapValue.fields.inputs.mapValue.fields;
              return (
                <tr key={index} className="hover:bg-slate-200 ">
                  <td>{student.id.stringValue}</td>
                  <td>{student.name.stringValue}</td>
                  <td>{student.className.stringValue}</td>
                  <td>{student.email.stringValue}</td>
                  <td>{student.section.stringValue}</td>
                  <td>{student.rollNumber.stringValue}</td>
                  <td className="flex flex-col gap-2 min-w-1">
                    <button className="btn cursor-pointer hover:text-blue-500">
                      view
                    </button>
                    <button className="btn cursor-pointer hover:text-blue-500">
                      Edit
                    </button>
                    <button className="btn cursor-pointer hover:text-blue-500">
                      delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="w-full h-full text-center flex items-center justify-center m-auto">
              <Loader />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsPage;
