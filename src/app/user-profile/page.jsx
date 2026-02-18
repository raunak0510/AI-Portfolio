"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [portfolio, setPortfolio] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/portfolio/getbyuser/${user._id}`)
      .then((res) => setPortfolio(res.data));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <h1 className="text-2xl mb-6">My Portfolio</h1>

      {portfolio && (
        <a
          href={`data:text/html;charset=utf-8,${encodeURIComponent(
            portfolio.htmlCode
          )}`}
          download="portfolio.html"
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          Download HTML
        </a>
      )}
    </div>
  );
}
