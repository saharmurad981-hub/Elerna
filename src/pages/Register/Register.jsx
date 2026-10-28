
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

// import authBg from "../assets/images/auth-bg.png";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    agree: false,
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      alert("Please accept the terms and privacy policy.");
      return;
    }

    // Connect your registration backend here.
    // Do not store passwords in localStorage.
    alert("Form validated. Registration is not connected yet.");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0e272b] text-white">

      {/* Decorative background */}
      {/* <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.13]"
        style={{ backgroundImage: `url(${authBg})` }}
      /> */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0e272b]/80" />

      {/* Logo */}
      <Link
        to="/"
        className="absolute left-5 top-8 z-20 text-[29px] font-bold tracking-tight sm:left-10"
      >
        <span className="text-[#ffb900]">ℓ</span>earna
      </Link>

      {/* Register content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-5 py-24">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Sign up
          </h1>

          <p className="mt-4 font-medium text-white/90">
            More than 50k students join with us!
          </p>
        </motion.div>

        {/* Register card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full max-w-[470px] rounded-[4px] bg-[#203940] px-6 py-8 shadow-2xl shadow-black/20 sm:px-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block font-semibold text-[#e4edef]"
              >
                Email address
              </label>

              <input
                id="register-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="h-[51px] w-full rounded-[4px] border border-transparent bg-[#395158] px-4 text-white outline-none transition focus:border-[#ffb900]"
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="register-name"
                className="mb-2 block font-semibold text-[#e4edef]"
              >
                Name
              </label>

              <input
                id="register-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="h-[51px] w-full rounded-[4px] border border-transparent bg-[#395158] px-4 text-white outline-none transition focus:border-[#ffb900]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block font-semibold text-[#e4edef]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleChange}
                  className="h-[51px] w-full rounded-[4px] border border-transparent bg-[#395158] px-4 pr-12 text-white outline-none transition focus:border-[#ffb900]"
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

              <p className="mt-2 text-xs text-white/50">
                Use at least 8 characters.
              </p>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#ffb900]"
              />

              <span className="text-sm font-medium leading-6 text-white/60">
                By creating an account, I agree to this website's{" "}
                <a href="/privacy" className="text-white hover:text-[#ffb900]">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-white hover:text-[#ffb900]">
                  terms of service
                </a>
              </span>
            </label>

            {/* Marketing */}
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="marketing"
                checked={form.marketing}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 accent-[#ffb900]"
              />

              <span className="text-sm font-medium text-white/60">
                I consent to receive marketing emails.
              </span>
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[51px] w-full items-center justify-center gap-2 rounded-[4px] bg-[#ffb900] font-semibold text-[#10272c] transition hover:bg-[#ffd047]"
            >
              Sign Up
              <ArrowRight size={17} />
            </motion.button>

            {/* Login link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <span className="font-medium text-white/60">
                Already have an account?
              </span>

              <Link
                to="/login"
                className="font-semibold text-white transition hover:text-[#ffb900]"
              >
                Log In
              </Link>
            </div>

          </form>
        </motion.div>

      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4 text-xs font-semibold text-white/70">
          <span>STYLE GUIDE &nbsp; · &nbsp; LICENSE</span>
          <span>DESIGN INSPIRED BY ELEARNA</span>
        </div>
      </div>

    </main>
  );
}
