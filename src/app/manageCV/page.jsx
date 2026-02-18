'use client';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ManageCV() {

  const uploadCV = (e) => {
    e.preventDefault();

    const file = e.target.cv.files[0];
    const formData = new FormData();
    formData.append("cv", file);

    axios.post("http://localhost:5000/cv/upload", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(() => {
      toast.success("CV uploaded successfully 🚀");
      window.location.href = "/generatePortfolio";
    })
    .catch(() => {
      toast.error("CV upload failed");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden px-4">

      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 -top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Upload Your CV 📄
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Let AI generate your professional portfolio
          </p>
        </div>

        {/* Form */}
        <form onSubmit={uploadCV} className="space-y-6">

          {/* File Input */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Choose CV File
            </label>

            <input
              type="file"
              name="cv"
              required
              className="w-full text-gray-300 bg-white/10 border border-white/20 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-blue-600 file:to-purple-600 file:text-white hover:file:opacity-90 cursor-pointer"
            />
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Upload CV
          </button>

        </form>

      </div>
    </div>
  );
}
