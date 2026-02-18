"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    axios.get("http://localhost:5000/user/getall")
      .then(res => setUsers(res.data))
      .catch(() => toast.error("Failed to fetch users"));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    axios.delete(`http://localhost:5000/user/delete/${id}`)
      .then(() => {
        toast.success("User deleted successfully");
        fetchUserData();
      })
      .catch(() => toast.error("Failed to delete user"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-10 text-gray-100">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-wide">
            👥 Manage Users
          </h1>
          <p className="text-gray-400 mt-2">
            View, manage and remove users from the system
          </p>
        </div>

        {/* Card Container */}
        <div className="backdrop-blur-md bg-gray-900/60 border border-gray-700/60 shadow-2xl rounded-2xl p-6">

          {/* Table Wrapper */}
          <div className="overflow-hidden rounded-xl border border-gray-700/60">
            <table className="w-full">
              <thead className="bg-gray-800/70">
                <tr className="text-gray-300">
                  <th className="p-4 text-left font-semibold">Name</th>
                  <th className="p-4 text-left font-semibold">Email</th>
                  <th className="p-4 text-center font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center p-8 text-gray-400">
                      No users found
                    </td>
                  </tr>
                )}

                {users.map((u) => (
                  <tr
                    key={u._id}
                    className="border-t border-gray-700/60 hover:bg-gray-800/60 transition duration-200"
                  >
                    <td className="p-4">{u.fullName}</td>
                    <td className="p-4 text-gray-300">{u.email}</td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => deleteUser(u._id)}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium
                        bg-red-600/90 hover:bg-red-700
                        shadow-md shadow-red-900/30
                        transition-all duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
