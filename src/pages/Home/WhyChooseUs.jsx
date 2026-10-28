
import { motion } from "motion/react";
import {
  BookOpen,
  PiggyBank,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Learn anything",
    description:
      "Explore a wide range of subjects and build practical skills with courses designed for every learner.",
  },
  {
    icon: PiggyBank,
    title: "Save money",
    description:
      "Discover affordable learning opportunities and free resources that help you grow without unnecessary costs.",
  },
  {
    icon: GraduationCap,
    title: "Flexible courses",
    description:
      "Study at your own pace and fit learning into your schedule from wherever you are.",
  },
  {
    icon: BadgeCheck,
    title: "Unlimited certificate",
    description:
      "Explore certificate-based learning opportunities to recognize your progress and achievements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#edf5f7] px-5 pb-24 pt-10 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-[650px] text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#102c32]">
            Why We Are
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102c32] sm:text-4xl">
            Elevate your professional journey
          </h2>

          <p className="mx-auto mt-4 max-w-[540px] text-sm leading-7 text-gray-500">
            Learn new skills, discover opportunities, and move closer
            to your goals with a flexible and supportive online
            learning experience.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-transparent transition-all duration-300 group-hover:border-[#ffb900] group-hover:bg-white">
                  <Icon
                    size={32}
                    strokeWidth={1.2}
                    className="text-[#102c32] transition-colors duration-300 group-hover:text-[#e5a500]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#102c32]">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-[250px] text-sm leading-7 text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
