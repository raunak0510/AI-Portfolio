"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function GeneratePortfolio() {
  const [theme, setTheme] = useState("dark");
  const [downloadURL, setDownloadURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");
  const [viewMode, setViewMode] = useState("preview"); // preview | code


  const generatePortfolio = () => {
    setLoading(true);
    setDownloadURL(null);
    setHtmlCode("");

    axios.post(
      "http://localhost:5000/portfolio/generate",
      { theme },   // ⭐ SEND THEME
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then(res => {
      const html = res.data.html;

      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      setDownloadURL(url);
      setHtmlCode(html);

      toast.success("Portfolio Generated 🎉");
    })
    .catch(err => {
      toast.error(err.response?.data?.message || "Generation failed");
    })
    .finally(() => setLoading(false));
  };

 return (
  <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black 
                  flex flex-col items-center py-12 px-6 text-white">

    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 
                     bg-clip-text text-transparent">
        Generate Your AI Portfolio
      </h1>
      <p className="text-gray-400 mt-2">
        Choose a theme and let AI build your professional portfolio.
      </p>
    </div>

    {/* Glass Card */}
    <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl 
                    border border-white/10 rounded-2xl p-8 shadow-2xl">

      {/* Theme Selector */}
      <div className="flex flex-col gap-4">
        <label className="text-gray-300 font-medium">Select Theme</label>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="dark"> Dark Theme</option>
          <option value="light"> Light Theme</option>
          <option value="blue"> Blue Theme</option>
        </select>

        {/* Generate Button */}
        <button
          onClick={generatePortfolio}
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 
                     hover:scale-105 transition-all duration-300 
                     px-6 py-3 rounded-xl font-semibold shadow-lg 
                     disabled:opacity-50"
        >
          {loading ? "Generating..." : "🚀 Generate Portfolio"}
        </button>

        {/* Download Button */}
        {downloadURL && (
          <a
            href={downloadURL}
            download="portfolio.html"
            className="bg-green-600 hover:bg-green-700 transition-all 
                       px-6 py-3 rounded-xl text-center font-semibold"
          >
            ⬇ Download Portfolio
          </a>
        )}
      </div>
    </div>

    {/* View Mode Toggle */}
    {downloadURL && (
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => setViewMode("preview")}
          className={`px-6 py-2 rounded-full transition ${
            viewMode === "preview"
              ? "bg-blue-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          🔍 Preview
        </button>
        <button
          onClick={() => setViewMode("code")}
          className={`px-6 py-2 rounded-full transition ${
            viewMode === "code"
              ? "bg-purple-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          💻 Code
        </button>
      </div>
    )}

    {/* Preview or Code Section */}
    {downloadURL && (
      <div className="w-full max-w-6xl mt-8">
        {viewMode === "preview" && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={downloadURL}
              title="Generated Portfolio Preview"
              className="w-full h-[80vh] border-none"
            />
          </div>
        )}

        {viewMode === "code" && (
          <div className="bg-black text-green-400 rounded-2xl p-6 
                          overflow-auto border border-gray-700 shadow-2xl">
            <pre className="whitespace-pre-wrap break-words text-sm">
              <code>{htmlCode}</code>
            </pre>
          </div>
        )}
      </div>
    )}
  </div>
)}
