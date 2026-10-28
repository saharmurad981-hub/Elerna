import about from "../../../assets/images/about1.webp"
import girl from "../../../assets/images/girl-elerna.webp"
import teacher from "../../../assets/images/teacher.webp"
import bob from "../../../assets/images/bobstu.webp"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  BookOpen,
  PenTool,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

// -----------------------------------------
// IMAGES - Replace with your own files
// -----------------------------------------

const images = {
  hero: `${about}`,
  students:` ${about}`,
  instructor: ` ${ girl}`,
  learning: `${teacher}`,
  teacher: `${bob}`,
  journey: "/images/about/journey.jpg",
};

// -----------------------------------------
// ANIMATION SETTINGS
// -----------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// -----------------------------------------
// ANIMATED COUNTER
// -----------------------------------------

function Counter({ end, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setValue(end);
      return;
    }

    let frame;
    const duration = 1800;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, end, reduceMotion]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// -----------------------------------------
// DATA
// -----------------------------------------

const partners = [
  "CONCLUAS",
  "A&H",
  "QB.",
  "Carla",
  "Shopia",
  "LEON",
];

const benefits = [
  {
    icon: BookOpen,
    title: "150+ online courses",
    description: "Explore learning opportunities",
  },
  {
    icon: PenTool,
    title: "Personalized learning",
    description: "Learn at your own pace",
  },
  {
    icon: RefreshCw,
    title: "Lifetime update",
    description: "Keep your knowledge current",
  },
];

const reasons = [
  {
    number: "01",
    title: "Flexibility and convenience",
    description:
      "Learn whenever and wherever you want with flexible courses designed around your schedule.",
  },
  {
    number: "02",
    title: "Course accessibility",
    description:
      "Access educational resources and learning materials from your favorite devices.",
  },
  {
    number: "03",
    title: "Cost-effectiveness",
    description:
      "Discover affordable learning opportunities that help you build valuable skills.",
  },
  {
    number: "04",
    title: "Personalized learning",
    description:
      "Choose courses that match your goals and develop your knowledge at your own pace.",
  },
];

const testimonials = [
  {
    name: "Linda Grady",
    role: "CO-ASSISTANT MANAGER",
    quote:
      "The learning experience was excellent. The lessons were clear, practical, and helped me build confidence in my professional skills.",
  },
  {
    name: "James Wilson",
    role: "WEB DEVELOPMENT STUDENT",
    quote:
      "I enjoyed the flexibility of the courses and the opportunity to learn useful skills through practical examples.",
  },
  {
    name: "Sophia Brown",
    role: "DESIGN STUDENT",
    quote:
      "The courses gave me a better understanding of design and helped me improve my creative projects.",
  },
];

// -----------------------------------------
// MAIN ABOUT COMPONENT
// -----------------------------------------

export default function About() {
  const [testimonialIndex, setTestimonialIndex] =
    useState(0);

  const reduceMotion = useReducedMotion();

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      (prev - 1 + testimonials.length) %
      testimonials.length
    );
  };

  return (
    <main className="w-full overflow-hidden bg-white text-[#10272c]">

      {/* ======================================
          1. ABOUT HERO
      ====================================== */}

      <section
        className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-[#0d252a]
         px-5 pb-32 pt-40 text-center text-white sm:min-h-[540px]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(8, 31, 35, 0.88),
              rgba(8, 31, 35, 0.88)
            ),
            url("${about}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-[8%] top-[20%] h-44 w-44 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute right-[12%] top-[30%] h-64 w-64 rounded-full border border-white/5" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            About Us
          </p>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[65px]">
            You're sincerely
            <br />
            determined to grow
          </h1>
        </motion.div>
      </section>

      {/* ======================================
          2. OUR STORY
      ====================================== */}

      <section className="relative bg-white px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative -mt-20 lg:-mt-24"
          >
            <img
              src={about}
              alt="Students learning together"
              className="h-[360px] w-full rounded-md object-cover shadow-xl sm:h-[500px] lg:h-[590px]"
            />

            {/* FLOATING REVIEW CARD */}
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -9, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-12 right-2 w-[230px] rounded-[35px] bg-white px-5 py-6 text-center shadow-2xl sm:right-8 sm:w-[270px]"
            >
              <p className="text-sm text-gray-500">
                Trusted By
              </p>

              <h3 className="mt-1 text-lg font-semibold">
                15000+ enrolled students
              </h3>

              <div className="mt-4 flex justify-center -space-x-3">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1506794778202-cad84cf45f1d",
                ].map((photo) => (
                  <img
                    key={photo}
                    src={`https://images.unsplash.com/${photo}?w=100&h=100&fit=crop`}
                    alt="Student avatar"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-lg text-[#ffb900]">
                  ★★★★★
                </span>

                <span className="text-sm text-gray-500">
                  4.94 (625)
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-12 lg:pt-0"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm font-semibold uppercase tracking-wider"
            >
              Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl font-bold leading-[1.16] tracking-tight sm:text-5xl lg:text-[55px]"
            >
              Limitless learning and get more possibilities
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-gray-500"
            >
              Education opens the door to new opportunities.
              Our learning platform brings together useful
              resources, flexible courses, and practical
              knowledge to help learners achieve their goals.
            </motion.p>

            {/* ANIMATED STATISTICS */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 divide-x divide-[#10272c]"
            >
              <div className="pr-3">
                <h3 className="text-3xl font-bold sm:text-5xl">
                  <Counter end={1.5} suffix="K" decimals={1} />
                </h3>
                <p className="mt-3 text-[10px] font-semibold uppercase sm:text-sm">
                  Finish Seasons
                </p>
              </div>

              <div className="px-3 sm:px-7">
                <h3 className="text-3xl font-bold sm:text-5xl">
                  <Counter end={7.8} suffix="K" decimals={1} />
                </h3>
                <p className="mt-3 text-[10px] font-semibold uppercase sm:text-sm">
                  Enrolled
                </p>
              </div>

              <div className="pl-3 sm:pl-7">
                <h3 className="text-3xl font-bold sm:text-5xl">
                  <Counter end={100} suffix="%" />
                </h3>
                <p className="mt-3 text-[10px] font-semibold uppercase sm:text-sm">
                  Job Placement
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          3. INFINITE LOGO SLIDER
      ====================================== */}

      <section className="overflow-hidden bg-[#0d252a] py-14 text-white">
        <p className="mb-9 px-5 text-center text-sm text-white/50 sm:text-base">
          Learn from 350+ leading universities and companies with us
        </p>

        <div className="relative overflow-hidden">
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...partners, ...partners].map(
              (partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex w-[190px] shrink-0 items-center justify-center px-7 sm:w-[240px]"
                >
                  <span className="whitespace-nowrap text-3xl font-bold tracking-wider text-white/35 transition-colors hover:text-white/90">
                    {partner}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ======================================
          4. BECOME AN INSTRUCTOR
      ====================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Become an instructor
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500 lg:mx-0">
              Share your knowledge, inspire new learners,
              and make an impact through education.
              Join a community of passionate instructors
              who help students develop valuable skills.
            </p>

            <Link
              to="/instructors"
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded bg-[#0d252a] px-10 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2854e8]"
            >
              Start Teaching Today
            </Link>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex min-h-[390px] w-full max-w-[550px] items-end justify-center"
          >
            <div className="absolute bottom-0 right-[5%] h-[310px] w-[310px] rounded-full bg-[#ffb900] sm:h-[440px] sm:w-[440px]" />

            <img
              src={images.instructor}
              alt="Instructor"
              className="relative z-10 max-h-[480px] w-[85%] object-contain"
            />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-[25%] z-20 rounded-full bg-white px-7 py-5 shadow-2xl"
            >
              <div className="text-sm text-[#ffb900]">
                ★★★★★
              </div>

              <p className="mt-1 text-sm font-semibold">
                4.94 (625)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          5. BENEFITS DARK BAR
      ====================================== */}

      <section className="px-5 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 rounded bg-[#0d252a] px-8 py-14 text-white shadow-xl md:grid-cols-3 lg:px-12"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                whileHover={{ y: -7 }}
                className="flex items-center gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/70">
                  <Icon size={30} strokeWidth={1.3} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ======================================
          6. WHY WE ARE
      ====================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider">
            Why We Are
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[43px]">
            We believe in our good education and development
            system and we know how to work together to reach
            greater success
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-20 grid max-w-[1350px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {reasons.map((reason) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -12 }}
              key={reason.number}
              className="group bg-white px-7 py-12 shadow-[0_10px_45px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-2xl lg:px-8"
            >
              <span className="text-4xl font-bold text-[#2854e8]">
                {reason.number}
              </span>

              <h3 className="mt-5 text-xl font-bold leading-snug">
                {reason.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-500">
                {reason.description}
              </p>

              {reason.number === "04" && (
                <Link
                  to="/courses"
                  className="mt-7 inline-flex rounded bg-[#0d252a] px-8 py-4 font-semibold text-white transition hover:bg-[#2854e8]"
                >
                  Get Started
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ======================================
          7. WHAT WE OFFER
      ====================================== */}

      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-20 lg:grid-cols-2">

          {/* IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[440px] sm:min-h-[560px]"
          >
            <div className="absolute left-[10%] top-0 h-52 w-52 rounded-full bg-[#ffb900]" />

            <div className="absolute bottom-0 left-[3%] h-[340px] w-[340px] rounded-full border-[3px] border-[#e8eef0] sm:h-[460px] sm:w-[460px]" />

            <img
              src={images.learning}
              alt="Student learning online"
              className="absolute right-0 top-10 z-10 h-[380px] w-[65%] rounded object-cover sm:h-[500px]"
            />

            <motion.img
              src={images.teacher}
              alt="Teacher giving an online lesson"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute left-0 top-[24%] z-20 h-[230px] w-[42%] rounded object-cover shadow-lg sm:h-[300px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm font-semibold uppercase tracking-wider"
            >
              What We Offer
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl"
            >
              Personalized learning for your ambitions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-8 text-gray-500"
            >
              Find learning opportunities that match your
              interests, strengthen your skills, and support
              your future goals.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
            >
              {[
                "Skill-based instruction",
                "Analytics and insights",
                "Global certification",
                "Customizable courses",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 font-semibold"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#2854e8]"
                  />
                  {feature}
                </div>
              ))}
            </motion.div>

            {/* QUESTION BOX */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-6 rounded bg-[#eef6f8] px-7 py-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-xl font-bold">
                  Still have questions?
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  We're here to help you find your next course.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded bg-[#0d252a] px-8 py-4 font-semibold text-white transition hover:bg-[#2854e8]"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          8. START YOUR JOURNEY
      ====================================== */}

      <section
        className="relative flex min-h-[350px] items-center bg-[#0d252a] bg-cover bg-center px-5 py-20 text-white sm:px-8"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(8, 25, 28, 0.55),
              rgba(8, 25, 28, 0.65)
            ),
            url("${images.journey}")
          `,
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex w-full max-w-[1150px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
        >
          <h2 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
            Are you ready to start your journey?
          </h2>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/courses"
              className="inline-flex min-h-14 items-center justify-center rounded border border-white px-9 font-semibold text-white transition hover:bg-white hover:text-[#0d252a]"
            >
              Browse Courses
            </Link>

            <Link
              to="/instructors"
              className="inline-flex min-h-14 items-center justify-center rounded bg-[#ffb900] px-9 font-semibold text-[#0d252a] transition hover:bg-white"
            >
              Become An Instructor
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ======================================
          9. TESTIMONIAL SLIDER
      ====================================== */}

      <section className="bg-[#eef6f8] px-5 py-24 text-center sm:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">

          {/* QUOTE DECORATION */}
          <div className="mb-8 select-none text-[150px] font-serif leading-[0.6] text-[#dfe9ec]">
            “
          </div>

          <div className="relative min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-xl font-medium leading-relaxed sm:text-2xl">
                  “{testimonials[testimonialIndex].quote}”
                </p>

                <h3 className="mt-10 text-xl font-semibold">
                  {testimonials[testimonialIndex].name}
                </h3>

                <p className="mt-3 text-sm font-medium tracking-wide text-gray-500">
                  {testimonials[testimonialIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#819399] text-[#819399] transition hover:border-[#0d252a] hover:bg-[#0d252a] hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#819399] text-[#819399] transition hover:border-[#0d252a] hover:bg-[#0d252a] hover:text-white"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
