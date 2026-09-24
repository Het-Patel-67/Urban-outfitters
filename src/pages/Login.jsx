import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
// Create an account
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Left panel — brand */}
      <div
        className="hidden lg:flex lg:w-[44%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ backgroundColor: "#141821" }}
      >
        <div className="flex items-center gap-2 text-white">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#E8A33D" }}
          />
          <span className="text-sm tracking-wide" style={{ color: "#8B93A3" }}>
            Tasklist
          </span>
        </div>

        <div>
          <h1
            className="text-white text-[2.75rem] leading-[1.15] mb-6 max-w-md"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 550 }}
          >
            Pick up right where you left off.
          </h1>
          <p className="max-w-sm leading-relaxed" style={{ color: "#8B93A3" }}>
            Your tasks, deadlines and notes are waiting on the other side. Sign in
            to get back to it.
          </p>
        </div>

        <svg
          width="220"
          height="140"
          viewBox="0 0 220 140"
          fill="none"
          className="opacity-90"
        >
          <rect x="1" y="1" width="140" height="24" rx="4" stroke="#2A3040" strokeWidth="1.5" />
          <circle cx="15" cy="13" r="5" stroke="#E8A33D" strokeWidth="1.5" />
          <rect x="1" y="37" width="100" height="24" rx="4" stroke="#2A3040" strokeWidth="1.5" />
          <circle cx="15" cy="49" r="5" fill="#E8A33D" />
          <path d="M12.5 49L14 50.5L17.5 47" stroke="#141821" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="1" y="73" width="120" height="24" rx="4" stroke="#2A3040" strokeWidth="1.5" />
          <circle cx="15" cy="85" r="5" fill="#E8A33D" />
          <path d="M12.5 85L14 86.5L17.5 83" stroke="#141821" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="w-full max-w-[360px]">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#E8A33D" }} />
            <span className="text-sm tracking-wide" style={{ color: "#6B7280" }}>
              Tasklist
            </span>
          </div>

          <h2
            className="text-2xl mb-1"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 550, color: "#1C1F26" }}
          >
            Welcome back
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6B7280" }}>
            Sign in with the email you used to sign up.
          </p>

          <form onSubmit={handleLogin} noValidate>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-1.5" style={{ color: "#374151" }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-md border text-sm outline-none transition-colors"
                style={{ borderColor: "#D1D5DB", color: "#1C1F26" }}
                onFocus={(e) => (e.target.style.borderColor = "#E8A33D")}
                onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm" style={{ color: "#374151" }}>
                  Password
                </label>
                <a href="/forgot-password" className="text-sm" style={{ color: "#E8A33D" }}>
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded-md border text-sm outline-none transition-colors pr-16"
                  style={{ borderColor: "#D1D5DB", color: "#1C1F26" }}
                  onFocus={(e) => (e.target.style.borderColor = "#E8A33D")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium"
                  style={{ color: "#6B7280" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm mt-3 mb-1" style={{ color: "#DC2626" }} role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-2.5 rounded-md text-sm font-medium transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#1C1F26", color: "#FFFFFF" }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="text-sm text-center mt-8" style={{ color: "#6B7280" }}>
            New here?{" "}
            <a href="/register" className="font-medium" style={{ color: "#1C1F26" }}>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;