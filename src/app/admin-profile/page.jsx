// 'use client';
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminProfile = () => {

//   const [admin, setAdmin] = useState(null);

//   useEffect(() => {
//     axios.get("/api/admin/profile")
//       .then(res => setAdmin(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>Admin Profile</h2>

//       {admin && (
//         <div>
//           <p><b>Name:</b> {admin.name}</p>
//           <p><b>Email:</b> {admin.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;
