import hero1 from "../../assets/images/hero1.webp"

import { motion } from "motion/react";
import {
  Atom,
  BookOpen,
  Calculator,
  GraduationCap,
  PencilRuler,
  Award,
  ArrowRight,
  Play,
} from "lucide-react";

import TopCategories from "./Topcategories";
import PromoBanners from "./PromoBanners";
import TopCourses from "./TopCourses";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import TopCourse1 from "./TopCourse1";
import JourneyCTA from "../../components/JourneyCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#082c30] text-white">
     

      {/* HERO SECTION */}
      <section className="relative isolate min-h-screen overflow-hidden">
        {/* Educational background texture */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #52777a 0.7px, transparent 1px),
              radial-gradient(circle at 70% 60%, #52777a 0.7px, transparent 1px)
            `,
            backgroundSize: "7px 7px, 11px 11px",
          }}
        />

        {/* Subtle dark gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#082c30]/10 via-[#082c30]/20 to-[#061f23]/80" />

        {/* Decorative educational line-art */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Atom
            className="absolute right-[20%] top-24 h-24 w-24 rotate-12 text-[#b2a16b]/10 sm:right-[23%] sm:h-36 sm:w-36"
            strokeWidth={0.7}
          />

          <BookOpen
            className="absolute right-[3%] top-[17%] h-32 w-32 -rotate-12 text-white/10 sm:h-48 sm:w-48"
            strokeWidth={0.65}
          />

          <Calculator
            className="absolute right-[5%] top-[52%] h-24 w-24 rotate-12 text-white/10 sm:h-36 sm:w-36"
            strokeWidth={0.7}
          />

          <PencilRuler
            className="absolute left-[42%] top-[15%] h-20 w-20 -rotate-12 text-white/10 sm:h-28 sm:w-28"
            strokeWidth={0.7}
          />

          <GraduationCap
            className="absolute bottom-[9%] right-[38%] h-24 w-24 rotate-6 text-[#ffb900]/10"
            strokeWidth={0.7}
          />

          <div className="absolute -right-28 top-40 h-80 w-80 rounded-full border border-white/[0.06]" />
          <div className="absolute -right-16 top-52 h-60 w-60 rounded-full border border-white/[0.05]" />

          <svg
            className="absolute inset-0 h-full w-full opacity-[0.12]"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M720 0 L900 250 L760 460 L1050 800"
              stroke="#a9c0bb"
              strokeWidth="1"
            />
            <path
              d="M860 0 L1030 220 L900 450 L1180 650"
              stroke="#a9c0bb"
              strokeWidth="1"
            />
            <circle cx="860" cy="260" r="85" stroke="#a9c0bb" />
            <circle cx="860" cy="260" r="48" stroke="#a9c0bb" />
            <path
              d="M0 580 L240 390 L390 570 L540 400"
              stroke="#a9c0bb"
              strokeWidth="1"
            />
            <path
              d="M0 610 L240 420 L390 600 L540 430"
              stroke="#a9c0bb"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Decorative circles */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[29%] hidden h-11 w-11 rounded-full border-[9px] border-blue-600 sm:block"
        />

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[7.5%] top-[54%] h-3 w-3 rounded-full bg-[#ffb900]"
        />

        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[48%] top-[78%] h-4 w-4 rounded-full bg-[#ffb900]"
        />

        {/* Main content */}
        <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:pb-10 lg:pt-24">
          {/* LEFT: Student image */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[570px] items-end justify-center lg:min-h-[570px]"
          >
            {/* Abstract shapes behind image */}
            <div className="absolute bottom-[7%] left-[6%] h-[72%] w-[84%] rounded-t-[48%] bg-[#0d3b3d]" />

            <div className="absolute bottom-[12%] left-[2%] h-40 w-36 -rotate-12 rounded-[45%] bg-[#ffb900]/35 blur-[1px]" />

            <div className="absolute bottom-[9%] right-[1%] h-60 w-20 rotate-12 rounded-full bg-[#164448]/80" />

            {/* Replace this path with your student image */}
            <img
              src={hero1}
              alt="Student ready to learn online"
              className="relative z-10 mx-auto max-h-[590px] w-full object-contain object-bottom drop-shadow-2xl"
            />

            {/* Achievement card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-2 left-0 z-20 flex items-center gap-4 rounded-xl bg-[#f5faf5] px-4 py-4 text-[#153438] shadow-xl sm:bottom-4 sm:px-6 sm:py-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#153438]/30">
                <Award size={31} strokeWidth={1.4} />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  125+
                </h3>
                <p className="text-xs font-medium text-[#536668] sm:text-sm">
                  Achievement Awards
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 mx-auto w-full max-w-[600px] pb-12 lg:mx-0 lg:pb-0"
          >
            <span className="mb-5 inline-block text-sm font-bold uppercase tracking-wide text-white/90">
              Online Learning
            </span>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px]">
              More than{" "}
              <span className="text-[#ffb900]">25000+</span>{" "}
              education courses online
            </h1>

            <p className="mt-6 max-w-[540px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Discover new skills, learn from experienced instructors,
              and build your future with flexible online education.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/courses"
                className="group inline-flex items-center gap-3 rounded-md bg-[#ffb900] px-6 py-4 font-bold text-[#092d30] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Courses
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/about"
                className="group inline-flex items-center gap-3 rounded-md border border-white/25 px-5 py-4 font-semibold text-white transition-all duration-300 hover:border-[#ffb900] hover:text-[#ffb900]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                  <Play size={13} fill="currentColor" />
                </span>
                Discover More
              </a>
            </div>

            {/* Small trust message */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/65">
              <BookOpen size={19} className="text-[#ffb900]" />
              <span>Learn at your own pace, anytime and anywhere.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add your next Home sections below this line */}
      {/* Example: Courses, About, Instructors, Testimonials */}

      <TopCategories/>
      <PromoBanners/>
      <TopCourses/>
      <Testimonials/>
      <WhyChooseUs/>
        <TopCourse1/>
        <JourneyCTA />
    </main>
  );
}
