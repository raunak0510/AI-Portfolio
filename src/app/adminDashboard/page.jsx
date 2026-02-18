"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Users, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

axios.defaults.baseURL = "http://localhost:5000";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await axios.get(
        "/api/admin/stats",
        { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } }
      );

      setStats(res.data || {});
    } catch (err) {
      toast.error("Session expired");
      router.push("/adminLogin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStats(); }, []);

  // safe numbers
  const totalUsers =
    stats.totalUsers ??
    stats.users ??
    stats.userCount ??
    0;

  const totalCVs =
    stats.totalresumes ??
    stats.resumes ??
    stats.CVCount ??
    0;

  const cards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <Users size={32} />,
      path: "/manage-user",
      glow: "shadow-blue-500/40",
      gradient: "from-blue-600 via-blue-700 to-blue-900",
    },
    {
      title: "Uploaded Resumes",
      value: totalCVs,
      icon: <FileText size={32} />,
      path: "/admin_manage-CV",
      glow: "shadow-green-500/40",
      gradient: "from-green-600 via-green-700 to-green-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-10 text-gray-100">

      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold tracking-wide">
            Admin Dashboard
          </h2>

          <p className="text-gray-400 mt-1">
            Welcome back, <span className="text-yellow-400 font-semibold">
              {stats.adminName || "Admin"}
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            {[1, 2].map(i => (
              <div
                key={i}
                className="h-40 rounded-2xl bg-gray-800/70 border border-gray-700"
              />
            ))}
          </div>
        ) : (

          /* Dashboard Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => router.push(card.path)}
                className={`
                  cursor-pointer rounded-2xl p-6
                  bg-gradient-to-br ${card.gradient}
                  border border-gray-700/60 backdrop-blur
                  shadow-xl ${card.glow}
                  hover:scale-[1.04] hover:shadow-2xl
                  transition-all duration-300
                `}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-5xl font-extrabold mt-2">
                      {card.value}
                    </p>
                  </div>

                  <div className="w-12 h-12 flex items-center justify-center
                    rounded-full bg-black/30 border border-white/10">
                    {card.icon}
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-200 opacity-80">
                  Tap to manage →
                </p>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

