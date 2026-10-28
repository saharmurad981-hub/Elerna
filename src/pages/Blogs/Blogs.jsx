import heroB from "../../assets/images/herob.webp"
import pic1 from "../../assets/images/teacher.webp"
import pic2 from "../../assets/images/twoDev.webp"
import pic3 from "../../assets/images/student5.webp"
import pic4 from "../../assets/images/student3.webp"
import pic5 from "../../assets/images/student2.webp"
import pic6 from "../../assets/images/student.webp"
import pic7 from "../../assets/images/comp2.webp"

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowLeft,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

// =====================================
// BLOG DATA
// =====================================

const blogs = [
  {
    id: 1,
    category: "CAREER",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
    image: `${pic1}`,
    slug: "improve-knowledge-retention",
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
    image: `${pic2}`,
    slug: "master-online-learning",
  },
  {
    id: 3,
    category: "TEACHING",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
    image: `${pic3}`,
    slug: "enhance-learning-experience",
  },
  {
    id: 4,
    category: "CAREER",
    title: "The evolution of teaching tools in the 21st century",
    date: "September 17, 2024",
    image: `${pic4}`,
    slug: "evolution-of-teaching-tools",
  },
  {
    id: 5,
    category: "DEVELOPMENT",
    title: "The role of parental involvement in academic achievement",
    date: "September 16, 2024",
    image: `${pic5}`,
    slug: "parental-involvement",
  },
  {
    id: 6,
    category: "TEACHING",
    title: "The role of technology in modern classrooms",
    date: "September 14, 2024",
    image: `${pic6}`,
    slug: "technology-in-classrooms",
  },
  {
    id: 7,
    category: "DEVELOPMENT",
    title: "Building valuable skills for the digital future",
    date: "September 10, 2024",
    image: `${pic7}`,
    slug: "digital-future-skills",
  },
  {
    id: 8,
    category: "CAREER",
    title: "How to prepare for a successful career transition",
    date: "September 8, 2024",
    image: `${pic2}`,
    slug: "career-transition",
  },
  {
    id: 9,
    category: "TEACHING",
    title: "Creating a productive online learning environment",
    date: "September 5, 2024",
    image: `${pic1}`,
    slug: "productive-online-learning",
  },
];

// =====================================
// ANIMATION VARIANTS
// =====================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

// =====================================
// BLOG CARD
// =====================================

function BlogCard({ blog }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      whileHover={reduceMotion ? {} : { y: -8 }}
      className="group flex h-full flex-col overflow-hidden rounded-[5px] border border-[#d8dfe1] bg-white transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(11,38,42,0.12)]"
    >
      <Link
        to={`/blog/${blog.slug}`}
        className="relative block h-[260px] overflow-hidden sm:h-[280px] lg:h-[295px]"
        aria-label={`Read ${blog.title}`}
      >
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover"
          whileHover={
            reduceMotion ? {} : { scale: 1.08 }
          }
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-[#0d252a]/0 transition-colors duration-300 group-hover:bg-[#0d252a]/15" />

        <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-[#ffb900] text-[#0d252a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={21} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-7 pb-8 pt-7 sm:px-9">
        <span className="mb-4 text-xs font-semibold tracking-[0.09em] text-[#19383d]">
          {blog.category}
        </span>

        <Link to={`/blog/${blog.slug}`}>
          <h3 className="min-h-[70px] text-xl font-semibold leading-[1.35] tracking-tight text-[#10272c] transition-colors duration-300 group-hover:text-[#2854e8]">
            {blog.title}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-3 pt-8">
          <div className="flex items-center gap-2 text-[15px] text-[#858585]">
            <CalendarDays size={16} />
            <span>{blog.date}</span>
          </div>

          <Link
            to={`/blog/${blog.slug}`}
            aria-label={`Read ${blog.title}`}
            className="text-[#10272c] transition-transform duration-300 hover:translate-x-1 hover:text-[#2854e8]"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================
// MAIN BLOGS COMPONENT
// =====================================

export default function Blogs() {
  const [page, setPage] = useState(1);
  const reduceMotion = useReducedMotion();

  const perPage = 6;
  const totalPages = Math.ceil(blogs.length / perPage);

  const currentBlogs = blogs.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const changePage = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;

    setPage(nextPage);

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-[#10272c]">

      {/* ==================================
          HERO SECTION
      ================================== */}

      <section
        className="relative flex min-h-[590px] items-center bg-[#0d252a] bg-cover bg-center px-5 pb-20 pt-40 text-white sm:px-8 lg:min-h-[650px] lg:px-12"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 14, 16, 0.78) 0%,
              rgba(5, 14, 16, 0.52) 55%,
              rgba(5, 14, 16, 0.68) 100%
            ),
            url(${heroB})
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
            className="max-w-[750px]"
          >
            <motion.p
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-sm font-semibold uppercase tracking-[0.06em] text-white/90"
            >
              News and Journals
            </motion.p>

            <h1 className="text-[42px] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]">
              Planning to transition
              <br className="hidden sm:block" />
              {" "}to a new career?
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-9 h-[4px] rounded-full bg-[#ffb900]"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================================
          BLOG GRID SECTION
      ================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1350px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2 xl:grid-cols-3"
            >
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ==================================
              PAGINATION
          ================================== */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">

            <button
              type="button"
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              className="flex items-center gap-2 text-[#10272c] transition hover:text-[#2854e8] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={17} />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => changePage(pageNumber)}
                  aria-label={`Go to page ${pageNumber}`}
                  aria-current={
                    page === pageNumber ? "page" : undefined
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                    page === pageNumber
                      ? "bg-[#0d252a] text-white"
                      : "text-[#10272c] hover:bg-[#eef6f8]"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => changePage(page + 1)}
              disabled={page === totalPages}
              className="flex items-center gap-2 text-[#10272c] transition hover:text-[#2854e8] disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================
          START YOUR JOURNEY CTA
      ================================== */}

      <section
        className="relative flex min-h-[350px] items-center bg-[#0d252a] bg-cover bg-center px-5 py-20 text-white sm:px-8 lg:min-h-[400px]"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 20, 24, 0.62),
              rgba(5, 20, 24, 0.67)
            ),
            url("/images/blogs/journey.jpg")
          `,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-[1150px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
        >
          <h2 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
            Are you ready to start
            <br />
            your journey?
          </h2>

          <div className="flex flex-wrap gap-5">
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/courses"
                className="inline-flex min-h-14 items-center justify-center rounded border border-white px-10 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0d252a]"
              >
                Browse Courses
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/instructors"
                className="inline-flex min-h-14 items-center justify-center rounded bg-[#ffb900] px-10 font-semibold text-[#0d252a] transition-colors duration-300 hover:bg-white"
              >
                Become An Instructor
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
