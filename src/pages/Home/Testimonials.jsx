import man from "../../assets/images/men.avif"
import woman from "../../assets/images/women.avif"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  GraduationCap,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jim Adams",
    role: "Designer",
    review:
      "The courses helped me improve my creative skills and gain the confidence to work on real projects. The lessons were easy to follow and the instructors were very supportive.",
    image:man,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Web Developer",
    review:
      "I started learning web development with very little experience. The practical projects and clear explanations helped me build my first professional portfolio.",
    image: woman,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Digital Marketer",
    review:
      "A wonderful learning experience. I could study at my own pace, improve my skills, and apply what I learned directly to my work.",
    image: man,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#092b30] py-20 text-white sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, #66878a 0.7px, transparent 0.8px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[500px] w-[800px] rounded-[50%] border border-white/10 rotate-[-15deg]" />
      <div className="pointer-events-none absolute -bottom-52 -left-20 -z-10 h-[500px] w-[800px] rounded-[50%] border border-white/10 rotate-[-15deg]" />
      <div className="pointer-events-none absolute right-[-100px] top-[-180px] -z-10 h-[400px] w-[400px] rounded-full bg-[#195057]/20 blur-3xl" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ffb900]">
            Our Testimonials
          </span>

          <h2 className="mt-4 max-w-[440px] text-3xl font-bold leading-tight sm:text-4xl lg:text-[43px]">
            Trusted by our successful students
          </h2>

          {/* Student photo */}
          <div className="relative mt-9 max-w-[400px]">
            <img
              src={man}
              alt="Happy student"
              loading="lazy"
              className="relative z-10 max-h-[310px] w-full object-contain object-bottom"
            />

            <div className="absolute bottom-0 left-[10%] h-48 w-48 rounded-full bg-[#ffb900]/10 blur-3xl" />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Statistics */}
          <div className="mb-10 grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <GraduationCap
                size={27}
                className="hidden text-[#ffb900] sm:block"
              />

              <strong className="text-3xl font-bold sm:text-4xl">
                70M
              </strong>

              <span className="border-l border-white/25 pl-3 text-[10px] uppercase leading-4 tracking-wider text-white/60">
                Successful
                <br />
                Students
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BriefcaseBusiness
                size={26}
                className="hidden text-[#ffb900] sm:block"
              />

              <strong className="text-3xl font-bold sm:text-4xl">
                25K
              </strong>

              <span className="border-l border-white/25 pl-3 text-[10px] uppercase leading-4 tracking-wider text-white/60">
                Global Job
                <br />
                Placements
              </span>
            </div>
          </div>

          {/* Testimonial slider */}
          <div className="relative min-h-[225px]">
            <Quote
              size={36}
              className="absolute -left-2 -top-5 text-[#ffb900]/30"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <div className="mb-5 flex gap-1 text-[#ffb900]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="max-w-[520px] text-base leading-8 text-white/70">
                  “{testimonials[active].review}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <img
                    src={testimonials[active].image}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold">
                      {testimonials[active].name}
                    </h4>

                    <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider controls */}
          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-[#092b30]"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-[#092b30]"
            >
              <ArrowRight size={17} />
            </button>

            <span className="ml-4 text-xs tracking-widest text-white/50">
              0{active + 1} / 0{testimonials.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
