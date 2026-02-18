"use client";
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export default function ManageResume() {

  const [resumes, setResumes] = useState([]);

  const fetchResumes = () => {
    axios.get("/cv/getall")
      .then(res => setResumes(res.data))
      .catch(() => alert("Failed to load resumes"));
  };

  const deleteResume = (id) => {
    if (!confirm("Are you sure you want to delete this resume?")) return;

    axios.delete(`/cv/delete/${id}`)
      .then(() => {
        alert("Resume deleted successfully");
        fetchResumes();
      })
      .catch(() => alert("Error deleting resume"));
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const resolveFileUrl = (path) =>
    path?.startsWith("http")
      ? path
      : `${axios.defaults.baseURL}/${path?.replace(/^\//, "")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-10 text-gray-100">

      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h2 className="text-4xl font-extrabold tracking-wide">
            📂 Manage Uploaded Resumes
          </h2>
          <p className="text-gray-400 mt-2">
            View and manage all uploaded resumes
          </p>
        </div>

        {resumes.length === 0 ? (
          <div className="mt-16 text-center text-gray-400 text-lg">
            No resumes uploaded yet.
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {resumes.map(cv => (
              <div
                key={cv._id}
                className="bg-gray-900/70 border border-gray-700/60 backdrop-blur-md
                rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:shadow-gray-900/40
                transition-all duration-200"
              >
                <h3 className="text-lg font-semibold tracking-wide">
                  {cv.fileName}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Uploaded on:
                  <span className="text-gray-300">
                    {" "}
                    {new Date(cv.createdAt).toLocaleString()}
                  </span>
                </p>

                <div className="flex gap-3 mt-5">

                  {/* VIEW */}
                  <a
                    href={resolveFileUrl(cv.filePath)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg text-sm font-medium
                    bg-blue-600/90 hover:bg-blue-700
                    shadow-md shadow-blue-900/40
                    transition-all duration-200"
                  >
                    View
                  </a>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteResume(cv._id)}
                    className="px-4 py-1.5 rounded-lg text-sm font-medium
                    bg-red-600/90 hover:bg-red-700
                    shadow-md shadow-red-900/40
                    transition-all duration-200"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}
