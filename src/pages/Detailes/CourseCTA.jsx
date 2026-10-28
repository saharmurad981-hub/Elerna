
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function CourseCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/course-cta-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#092b30]/75" />

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#092b30]/60 via-transparent to-[#092b30]/30" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#ffb900]">
              <GraduationCap size={20} />
              Start Learning Today
            </span>

            <h2 className="max-w-[530px] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
              Are you ready to start
              <br className="hidden sm:block" />
              {" "}your journey?
            </h2>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex w-full flex-wrap gap-4 lg:w-auto"
          >
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/courses"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-white px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-[#102c32]"
              >
                Browse Courses
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/become-a-teacher"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#ffb900] px-8 py-3 text-sm font-semibold text-[#102c32] transition-all duration-300 hover:bg-white"
              >
                Become An Instructor
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
