
import { motion } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";

const trendingCourses = [
  {
    id: 1,
    category: "Development",
    title: "Building single page applications with Angular",
    image: "/images/trending-1.jpg",
    price: "Free",
    rating: "5.00",
    reviews: "328",
  },
  {
    id: 2,
    category: "Development",
    title: "Database integration with MongoDB",
    image: "/images/course-4.jpg",
    price: "$59",
    rating: "4.49",
    reviews: "756",
  },
  {
    id: 3,
    category: "Management",
    title: "Risk management and business continuity",
    image: "/images/course-5.jpg",
    price: "$49",
    rating: "4.88",
    reviews: "210",
  },
  {
    id: 4,
    category: "Development",
    title: "Full-stack development with the MERN stack",
    image: "/images/course-6.jpg",
    price: "$72",
    rating: "5.00",
    reviews: "985",
  },
];

export default function TrendingCourses() {
  return (
    <section className="bg-[#edf5f7] px-5 pb-16 pt-20 sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#102c32]">
            Trending Courses
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#102c32] sm:text-4xl">
            Explore our top programs
          </h2>
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trendingCourses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#102c32]/10"
            >
              {/* Image */}
              <div className="relative h-[185px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Price */}
                <span className="absolute right-3 top-3 flex h-12 min-w-12 items-center justify-center rounded-full bg-[#2d50e5] px-2 text-sm font-semibold text-white shadow-md">
                  {course.price}
                </span>
              </div>

              {/* Details */}
              <div className="p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  {course.category}
                </span>

                <h3 className="mt-2 min-h-[54px] text-base font-semibold leading-snug text-[#102c32] transition-colors group-hover:text-[#2d50e5]">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center gap-1">
                  <div className="flex text-[#ffb900]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>

                  <span className="ml-1 text-xs text-gray-500">
                    {course.rating} ({course.reviews})
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
