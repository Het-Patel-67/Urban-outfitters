import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      setName("");
      setEmail("");
      setPassword("");
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Couldn't create your account. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Left panel — brand */}
      <div
        className="hidden lg:flex lg:w-[44%] flex-col justify-between p-12"
        style={{ backgroundColor: "#141821" }}
      >
        <div className="flex items-center gap-2 text-white">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#E8A33D" }} />
          <span className="text-sm tracking-wide" style={{ color: "#8B93A3" }}>
            Tasklist
          </span>
        </div>

        <div>
          <h1
            className="text-white text-[2.75rem] leading-[1.15] mb-6 max-w-md"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 550 }}
          >
            A place to keep track of what matters.
          </h1>
          <p className="max-w-sm leading-relaxed" style={{ color: "#8B93A3" }}>
            Set up your account in under a minute — no card, no clutter, just
            your tasks.
          </p>
        </div>

        <svg width="220" height="140" viewBox="0 0 220 140" fill="none" className="opacity-90">
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
            Create your account
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6B7280" }}>
            Already have one?{" "}
            <a href="/login" className="font-medium" style={{ color: "#1C1F26" }}>
              Sign in instead
            </a>
          </p>

          <form onSubmit={handleRegister} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm mb-1.5" style={{ color: "#374151" }}>
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Jordan Lee"
                className="w-full px-3 py-2.5 rounded-md border text-sm outline-none transition-colors"
                style={{ borderColor: "#D1D5DB", color: "#1C1F26" }}
                onFocus={(e) => (e.target.style.borderColor = "#E8A33D")}
                onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
              <label htmlFor="password" className="block text-sm mb-1.5" style={{ color: "#374151" }}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className="w-full px-3 py-2.5 rounded-md border text-sm outline-none transition-colors pr-16"
                  style={{ borderColor: "#D1D5DB", color: "#1C1F26" }}
                  onFocus={(e) => (e.target.style.borderColor = "#E8A33D")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
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
              {loading ? "Creating account…" : "Create account"}
            </button>

            <p className="text-xs text-center mt-4 leading-relaxed" style={{ color: "#9CA3AF" }}>
              By creating an account you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;