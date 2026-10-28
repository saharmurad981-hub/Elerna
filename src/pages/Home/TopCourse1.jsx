import teacher from "../../assets/images/teacher.webp"
import computer from "../../assets/images/computer.webp"
import student2 from "../../assets/images/student2.webp"
import student3 from "../../assets/images/student3.webp"
import student4 from "../../assets/images/student4.webp"
import student5 from "../../assets/images/student5.webp"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: 1,
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    image: teacher,
    price: "Free",
    rating: "4.88",
    reviews: "210",
    lessons: 6,
    enrolled: "8k",
  },
  {
    id: 2,
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    image: computer,
    price: "Free",
    rating: "5.00",
    reviews: "1.2k",
    lessons: 8,
    enrolled: "25k",
  },
  {
    id: 3,
    category: "Finance",
    title: "Operations management and process improvement",
    image: student2,
    price: "Free",
    rating: "5.00",
    reviews: "812",
    lessons: 12,
    enrolled: "23k",
  },
  {
    id: 4,
    category: "Development",
    title: "Database integration with MongoDB",
    image: student3,
    price: "$59",
    rating: "4.49",
    reviews: "756",
    lessons: 10,
    enrolled: "12k",
  },

];

const filters = [
  "All courses",
  "Design",
  "Development",
  "Management",
  "Finance",
];

export default function TopCourses() {
  const [activeFilter, setActiveFilter] = useState("All courses");

  const filteredCourses =
    activeFilter === "All courses"
      ? courses
      : courses.filter(
          (course) => course.category === activeFilter
        );

  return (
    <section className="bg-[#edf5f7] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading and filters */}
        <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#102c32]">
              Online Learning
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#102c32] sm:text-4xl">
              Top online courses
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "text-[#102c32]"
                    : "text-gray-400 hover:text-[#102c32]"
                }`}
              >
                {filter}

                {activeFilter === filter && (
                  <motion.span
                    layoutId="course-filter-underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ffb900]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -7 }}
                className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#102c32]/10"
              >
                {/* Course image */}
                <div className="relative h-[215px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Course information */}
                <div className="relative px-6 pb-0 pt-6">
                  {/* Price badge */}
                  <span className="absolute -top-5 right-5 flex h-12 min-w-12 items-center justify-center rounded-full bg-[#2d50e5] px-2 text-sm font-semibold text-white shadow-md">
                    {course.price}
                  </span>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#102c32]">
                    {course.category}
                  </span>

                  <h3 className="mt-3 min-h-[56px] text-lg font-semibold leading-snug text-[#102c32] transition-colors group-hover:text-[#2d50e5]">
                    {course.title}
                  </h3>

                  {/* Ratings */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="flex text-[#ffb900]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>

                  {/* Bottom details */}
                  <div className="mt-5 grid grid-cols-2 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-2 border-r border-gray-200 py-4 text-xs text-[#102c32]">
                      <BookOpen size={14} />
                      {course.lessons} Lessons
                    </div>

                    <div className="flex items-center justify-center gap-2 py-4 text-xs text-[#102c32]">
                      <Users size={14} />
                      {course.enrolled} Enrolled
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/courses"
            className="group inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#102c32] px-7 py-4 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#ffb900] hover:text-[#102c32]"
          >
            We assist you in finding the ideal tutor at no cost.
            <span className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
              Browse All Available Courses
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
