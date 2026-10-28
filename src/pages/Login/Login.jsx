
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

// import authBg from "../assets/images/auth-bg.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your authentication backend here.
    // This demo does not authenticate users.
    alert("Login form validated. Authentication is not connected yet.");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0e272b] text-white">

      {/* Background art */}
      {/* <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.13]"
        style={{ backgroundImage: `url(${authBg})` }}
      /> */}

      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0e272b]/30 via-transparent to-[#0e272b]" />

      {/* Logo */}
      <Link
        to="/"
        className="absolute left-5 top-8 z-20 text-[29px] font-bold tracking-tight sm:left-10"
      >
        <span className="text-[#ffb900]">ℓ</span>earna
      </Link>

      {/* Login section */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-5 py-24">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Log in
          </h1>

          <p className="mt-4 text-sm font-medium text-white/90 sm:text-base">
            More than 50k students have joined Elearna already
          </p>
        </motion.div>

        {/* Login card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full max-w-[470px] rounded-[4px] bg-[#203940] px-6 py-8 shadow-2xl shadow-black/20 sm:px-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block font-semibold text-[#e4edef]"
              >
                Email address
              </label>

              <input
                id="login-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="h-[51px] w-full rounded-[4px] border border-transparent bg-[#395158] px-4 text-white outline-none transition duration-300 focus:border-[#ffb900] focus:bg-[#425c63]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block font-semibold text-[#e4edef]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  className="h-[51px] w-full rounded-[4px] border border-transparent bg-[#395158] px-4 pr-12 text-white outline-none transition duration-300 focus:border-[#ffb900] focus:bg-[#425c63]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#ffb900]"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[51px] w-full items-center justify-center gap-2 rounded-[4px] bg-[#ffb900] font-semibold text-[#10272c] transition hover:bg-[#ffd047]"
            >
              Log In
              <ArrowRight size={17} />
            </motion.button>

            {/* Register link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <span className="font-medium text-white/60">
                Don't have an account?
              </span>

              <Link
                to="/register"
                className="font-semibold text-white transition hover:text-[#ffb900]"
              >
                Sign Up
              </Link>
            </div>

          </form>
        </motion.div>

        {/* Divider */}
        <div className="mt-9 flex w-full max-w-[330px] items-center gap-5">
          <div className="h-px flex-1 bg-white/30" />
          <span className="font-semibold">Test login</span>
          <div className="h-px flex-1 bg-white/30" />
        </div>

        <p className="mt-4 max-w-sm text-center text-sm leading-7 text-white/50">
          This is a frontend demonstration. Connect an authentication service to enable real login.
        </p>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 text-xs font-semibold text-white/70">
          <span>STYLE GUIDE &nbsp; · &nbsp; LICENSE</span>
          <span>DESIGN INSPIRED BY ELEARNA</span>
        </div>
      </div>

    </main>
  );
}
