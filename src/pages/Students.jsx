import { useCallback, useState } from "react";
import api from "../lib/axios";

const API_URL = "http://127.0.0.1:8000/api/v1/students/";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState(null);

  // GET
  const getStudents = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
      // const res = await api.get("students/");
      // setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          branch,
          age,
        }),
      });
      const data = await res.json();
      setResponse(data);

      // const res = await api.post("students/", {
      //   name,
      //   branch,
      //   age,
      // });
      // setResponse(res.data);

      // clear form
      setName("");
      setBranch("");
      setAge("");

      getStudents(); // refresh list
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE
  const deleteStudent = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
      await fetch(`${API_URL}${id}/`, {
        method: "DELETE",
      });
      // await api.delete(`students/${id}/`);

      getStudents();
    } catch (error) {
      console.error(error);
    }
  };

  // PATCH
  const updateStudent = async (student) => {
    const newName = prompt("Enter new name:", student.name);
    const newBranch = prompt("Enter new branch:", student.branch);
    const newAge = prompt("Enter new age:", student.age);

    if (!newName || !newBranch || !newAge) return;

    try {
      // await fetch(`${API_URL}${student.id}/`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: newName,
      //     branch: newBranch,
      //     age: newAge,
      //   }),
      // });
      await api.patch(`students/${student.id}/`, {
        name: newName,
        branch: newBranch,
        age: newAge,
      });

      getStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Student CRUD</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-4 rounded mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Create Student</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          className="w-full border p-2 mb-3 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <textarea
          placeholder="Branch"
          className="w-full border p-2 mb-3 rounded"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>

      {/* RESPONSE */}
      {response && (
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h3 className="font-semibold mb-2">Response from API</h3>
          <pre className="text-sm">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {/* LIST */}
      <div className="flex gap-5 justify-between">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        <button
          onClick={getStudents}
          className="bg-blue-600 p-2 rounded cursor-pointer font-semibold text-white"
        >
          GET Students List
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Branch:</strong> {student.branch}
              </p>
              <p>
                <strong>Age:</strong> {student.age}
              </p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => updateStudent(student)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                PATCH
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
