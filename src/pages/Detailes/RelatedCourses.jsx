
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, Star } from "lucide-react";
import Dev2 from "../../assets/images/twoDev.webp"
import Dev from "../../assets/images/computer.webp"
import Dev3 from "../../assets/images/DEV3.webp"
const relatedCourses = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Building single page applications with Angular",
    image: `${Dev}`,
    price: "Free",
    rating: "5.00",
    reviews: 328,
    slug: "angular-development",
  },
  {
    id: 2,
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    image: `${Dev2}`,
    price: "$59",
    rating: "4.49",
    reviews: 756,
    slug: "mongodb-development",
  },
  {
    id: 3,
    category: "FINANCE",
    title: "Operations management and process improvement",
    image: `${Dev3}`,
    price: "Free",
    rating: "5.00",
    reviews: 812,
    slug: "operations-management",
  },
];

export default function RelatedCourses() {
  return (
    <section className="bg-[#edf5f7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[2px] text-[#102c32]">
            Online Learning
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#102c32] sm:text-4xl lg:text-5xl">
            Related courses
          </h2>
        </motion.div>

        {/* Course cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <Link
                to={`/courses/${course.slug}`}
                className="block"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden sm:h-[280px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Price circle */}
                  <div className="absolute right-6 top-6 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#2854e8] text-sm font-bold text-white shadow-lg">
                    {course.price}
                  </div>

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-[#102c32]/0 transition-colors duration-300 group-hover:bg-[#102c32]/20" />

                  {/* Hover arrow */}
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#ffb900] text-[#102c32] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <p className="text-[11px] font-semibold tracking-wider text-gray-500">
                    {course.category}
                  </p>

                  <h3 className="mt-3 min-h-[56px] text-lg font-bold leading-snug text-[#102c32] transition-colors group-hover:text-[#2854e8]">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-0.5 text-[#ffb900]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
