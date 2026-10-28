
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function JourneyCTA() {
  return (
    <section className="relative z-10 bg-[#edf5f7] px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relatie mx-auto -mb-12 flex max-w-[1100px] flex-col items-start justify-between gap-7 overflow-hidden rounded-[4px] bg-[#ffb900] px-7 py-9 shadow-lg sm:px-10 md:flex-row md:items-center md:px-14 md:py-12 lg:-mb-14"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full border border-white/20" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10"
        >
          <h2 className="max-w-[350px] text-2xl font-bold leading-snug text-[#102c32] sm:text-3xl">
            Are you ready to start
            <br className="hidden sm:block" />
            {" "}your journey?
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative z-10 flex w-full flex-wrap items-center gap-4 md:w-auto"
        >
          {/* Browse courses */}
          <motion.a
            href="/courses"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] bg-[#102c32] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#102c32]"
          >
            Browse Courses
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

          {/* Become a teacher */}
          <motion.a
            href="/become-a-teacher"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] border border-[#102c32] px-6 py-3 text-sm font-semibold text-[#102c32] transition-colors duration-300 hover:bg-[#102c32] hover:text-white"
          >
            Become A Teacher
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
