// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ManagePortfolio() {

//   const [portfolios, setPortfolios] = useState([]);

//   const fetchPortfolios = async () => {
//     try {
//       const token = localStorage.getItem("adminToken");

//       const res = await axios.get(
//         "http://localhost:5000/portfolio/getall",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setPortfolios(res.data);
//     } catch (err) {
//       console.log("FETCH ERROR 👉", err);
//     }
//   };

//   useEffect(() => { fetchPortfolios(); }, []);

//   // Resolve file url safely
//   const resolveUrl = (path) =>
//     path?.startsWith("http")
//       ? path
//       : `http://localhost:5000/${path?.replace(/^\//, "")}`;

//   const handleView = (url) => window.open(resolveUrl(url), "_blank");

//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = resolveUrl(url);
//     link.download = true;
//     link.click();
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem("adminToken");

//       await axios.delete(
//         `http://localhost:5000/portfolio/delete/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Portfolio deleted successfully");
//       fetchPortfolios();
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-10 text-gray-100">

//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-extrabold tracking-wide mb-6">
//           🖼 Manage Generated Portfolios
//         </h2>

//         {portfolios.length === 0 ? (
//           <p className="text-gray-400 mt-10 text-center">
//             No portfolios generated yet.
//           </p>
//         ) : (

//           <div className="overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-900/60 backdrop-blur">

//             <table className="w-full">
//               <thead className="bg-gray-800/70">
//                 <tr className="text-gray-300">
//                   <th className="p-4 text-left">User</th>
//                   <th className="p-4 text-left">Title</th>
//                   <th className="p-4 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {portfolios.map(item => {

//                   const userName =
//                     item.userName ||
//                     item.user?.name ||
//                     item.user?.fullName ||
//                     item.user?.email ||
//                     "Unknown User";

//                   const fileUrl =
//                     item.filepath ||
//                     item.filePath ||
//                     item.url ||
//                     item.fileUrl;

//                   return (
//                     <tr
//                       key={item._id}
//                       className="border-t border-gray-700/60 hover:bg-gray-800/60 transition"
//                     >
//                       <td className="p-4">{userName}</td>
//                       <td className="p-4">{item.title}</td>

//                       <td className="p-4 flex justify-center gap-3">

//                         <button
//                           onClick={() => handleView(fileUrl)}
//                           className="px-4 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-700 shadow-blue-900/40 shadow-md transition"
//                         >
//                           View
//                         </button>

//                         <button
//                           onClick={() => handleDownload(fileUrl)}
//                           className="px-4 py-1.5 rounded-lg bg-yellow-500/90 hover:bg-yellow-600 shadow-yellow-900/40 shadow-md transition"
//                         >
//                           Download
//                         </button>

//                         <button
//                           onClick={() => handleDelete(item._id)}
//                           className="px-4 py-1.5 rounded-lg bg-red-600/90 hover:bg-red-700 shadow-red-900/40 shadow-md transition"
//                         >
//                           Delete
//                         </button>

//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }
