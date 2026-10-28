
import { motion } from "motion/react";
import {
  Palette,
  HandCoins,
  Code2,
  Megaphone,
  Monitor,
  Type,
  ArrowUpRight,
} from "lucide-react";

const partners = [
  "Shopia",
  "LEOFE",
  "CONCLUAS",
  "A&H",
  "OB.",
  "Caria",
];

const categories = [
  {
    title: "Creative web design",
    courses: 8,
    icon: Palette,
    href: "/courses/web-design",
  },
  {
    title: "Finance accounting",
    courses: 10,
    icon: HandCoins,
    href: "/courses/finance",
  },
  {
    title: "IT and software",
    courses: 5,
    icon: Code2,
    href: "/courses/software",
  },
  {
    title: "Digital marketing",
    courses: 4,
    icon: Megaphone,
    href: "/courses/marketing",
  },
  {
    title: "Web development",
    courses: 8,
    icon: Monitor,
    href: "/courses/web-development",
  },
  {
    title: "Content writing",
    courses: 3,
    icon: Type,
    href: "/courses/writing",
  },
];

export default function TopCategories() {
  return (
    <>
      {/* Partner logos section */}
      <section className="bg-[#edf5f7] py-12 md:py-14">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="mb-9 text-center text-base font-medium text-[#102c32]">
            Learn from 350+ leading universities and companies with us
          </p>

          <div className="grid grid-cols-3 items-center gap-8 md:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}g
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ scale: 1.08 }}
                className="flex min-h-12 items-center justify-center text-center"
              >
                <span className="cursor-default font-serif text-xl font-bold tracking-wide text-[#929a9d] opacity-70 transition-all duration-300 hover:text-[#142d32] hover:opacity-100 sm:text-2xl lg:text-3xl">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="bg-white px-5 pb-14 pt-20 sm:px-8 lg:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#102c32]">
              Top Categories
            </span>

            <h2 className="mx-auto mt-5 max-w-[600px] text-3xl font-bold leading-tight text-[#102c32] sm:text-4xl">
              Discover leading categories to elevate your journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-7">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.a
                  key={category.title}
                  href={category.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative flex min-h-[210px] flex-col items-center justify-center rounded-[4px] border border-[#e0e7ea] bg-white px-3 py-7 text-center transition-all duration-300 hover:border-[#ffb900] hover:shadow-xl hover:shadow-[#102c32]/5"
                >
                  <div className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef5f7] transition-colors duration-300 group-hover:bg-[#ffb900]">
                    <Icon
                      size={31}
                      strokeWidth={1.3}
                      className="text-[#102c32]"
                    />
                  </div>

                  <h3 className="max-w-[150px] text-base font-semibold leading-6 text-[#102c32]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#888]">
                    {category.courses} Courses
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="absolute right-3 top-3 text-[#102c32] opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
