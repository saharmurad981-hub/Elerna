
import { motion } from "motion/react";
import {
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const features = [
  "Skill-based instruction",
  "Analytics and insights",
  "Global certification",
  "Customizable courses",
];

export default function LearningAbout() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE: Overlapping images */}
        <div className="relative mx-auto h-[400px] w-full max-w-[510px] sm:h-[490px]">
          {/* Back image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute right-0 top-0 h-[75%] w-[65%] overflow-hidden rounded-sm shadow-xl"
          >
            <img
              src="/images/learning-student.jpg"
              alt="Student studying with headphones"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Front image */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute bottom-0 left-0 z-10 h-[57%] w-[57%] overflow-hidden rounded-sm shadow-2xl"
          >
            <img
              src="/images/online-instructor.jpg"
              alt="Online instructor teaching a class"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Floating statistic badge */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 0.7 }}
            className="absolute left-[7%] top-[9%] z-20 flex items-center gap-2 rounded-sm bg-[#102c32] px-4 py-3 text-white shadow-xl sm:left-[12%]"
          >
            <div className="relative">
              <span className="text-3xl font-bold text-[#ffb900] sm:text-4xl">
                50+
              </span>
              <Sparkles
                size={15}
                className="absolute -right-3 -top-1 text-[#ffb900]"
              />
            </div>

            <p className="ml-2 text-xs font-medium leading-4">
              Free courses
              <br />
              listed online
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Text */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#102c32]">
            What We Offer
          </span>

          <h2 className="mt-4 max-w-[490px] text-3xl font-bold leading-tight text-[#102c32] sm:text-4xl lg:text-[42px]">
            Personalized learning for your ambitions
          </h2>

          <p className="mt-5 max-w-[510px] text-base leading-7 text-gray-500">
            Learn at your own pace with courses designed to help you
            develop practical skills, explore new opportunities,
            and achieve your personal and professional goals.
          </p>

          {/* Features */}
          <div className="mt-7 grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-sm font-medium text-[#102c32]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf5f7]">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {feature}
              </div>
            ))}
          </div>

          {/* Questions card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="mt-10 flex flex-col gap-5 rounded-sm bg-[#edf5f7] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          >
            <div>
              <h3 className="text-base font-semibold text-[#102c32]">
                Still have questions?
              </h3>

              <p className="mt-3 max-w-[280px] text-sm leading-6 text-gray-500">
                Explore our learning opportunities or get in touch
                to find the right course for you.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#102c32] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ffb900] hover:text-[#102c32]"
            >
              Get Started
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
