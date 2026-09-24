import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const INK = "#1C1F26";
const ACCENT = "#E8A33D";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function Profile() {
  const [user, setUser] = useState(null);
  const [authMissing, setAuthMissing] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthMissing(true);
      return;
    }

    axios
      .get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => setAuthMissing(true));
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#FAFAF" }}>
      
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        {authMissing ? (
          <div className="w-full max-w-[360px] text-center">
            <h2
              className="text-2xl mb-2"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 550, color: INK }}
            >
              You're not signed in
            </h2>
            <p className="text-sm mb-8" style={{ color: MUTED }}>
              Sign in or create an account to view your profile.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-md text-sm font-medium"
                style={{ backgroundColor: INK, color: "#FFFFFF" }}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-md text-sm font-medium border"
                style={{ borderColor: BORDER, color: INK }}
              >
                Create account
              </Link>
            </div>
          </div>
        ) : !user ? (
          <div
            className="w-8 h-8 rounded-full animate-spin"
            style={{ border: `2.5px solid ${BORDER}`, borderTopColor: ACCENT }}
            aria-label="Loading profile"
          />
        ) : (
          <div className="w-full max-w-[360px]">
            <div className="flex flex-col items-center text-center mb-8">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover mb-4"
                  style={{ border: `1px solid ${BORDER}` }}
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-lg font-medium "
                  style={{ backgroundColor: "#F3E9DA", color: "#8A5A16" }}
                >
                  {initials(user.name) || "?"}
                </div>
              )}
              <h2
                className="text-xl mb-0.5"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 550, color: INK }}
              >
                {user.name}
              </h2>
              <p className="text-sm" style={{ color: MUTED }}>
                {user.email}
              </p>
            </div>

            <div className="rounded-lg border divide-y" style={{ borderColor: BORDER }}>
              <Link
                to="/register"
                className="flex items-center justify-between px-4 py-3.5 text-sm"
                style={{ color: INK }}
              >
                Add another account
                <span style={{ color: MUTED }}>→</span>
              </Link>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="w-full text-left px-4 py-3.5 text-sm disabled:opacity-60"
                style={{ color: "#DC2626" }}
              >
                {loggingOut ? "Signing out…" : "Sign out"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}