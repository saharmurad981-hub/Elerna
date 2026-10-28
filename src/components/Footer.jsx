
import { motion } from "motion/react";
import {
  Atom,
  BookOpen,
  GraduationCap,
  Pencil,
  Ruler,
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,

} from "lucide-react";

const footerLinks = [
  {
    title: "Quick links",
    links: [
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Career", href: "/career" },
      { name: "Instructor", href: "/instructors" },
    ],
  },
  {
    title: "Popular courses",
    links: [
      { name: "Finance", href: "/courses/finance" },
      { name: "Management", href: "/courses/management" },
      { name: "Design", href: "/courses/design" },
      { name: "Web development", href: "/courses/web-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Courses", href: "/courses" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "License", href: "/license" },
      { name: "Pricing", href: "/pricing" },
      { name: "404", href: "/404" },
    ],
  },
  {
    title: "CMS",
    links: [
      { name: "Course details", href: "/course-details" },
      { name: "Instructor details", href: "/instructor-details" },
      { name: "Blog details", href: "/blog-details" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate  bg-[#092b30] pt-32  text-white sm:pt-36">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #66878a 0.8px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Background educational artwork */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Atom
          className="absolute -left-10 top-6 h-44 w-44 rotate-12 text-[#c4d7d6]/10"
          strokeWidth={0.65}
        />

        <BookOpen
          className="absolute bottom-12 left-[23%] h-44 w-44 -rotate-12 text-[#c4d7d6]/10"
          strokeWidth={0.65}
        />

        <GraduationCap
          className="absolute right-[3%] bottom-[5%] h-52 w-52 rotate-12 text-[#c4d7d6]/10"
          strokeWidth={0.65}
        />

        <Pencil
          className="absolute right-[18%] top-[5%] h-36 w-36 -rotate-12 text-[#c4d7d6]/10"
          strokeWidth={0.65}
        />

        <Ruler
          className="absolute left-[55%] bottom-[10%] h-40 w-40 rotate-45 text-[#c4d7d6]/10"
          strokeWidth={0.65}
        />

        {/* Abstract lines */}
        <svg
          viewBox="0 0 1400 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-100 500 C200 100 400 750 800 300 S1200 100 1500 500"
            stroke="#9cb7b7"
            strokeWidth="1"
          />
          <path
            d="M-100 530 C200 130 400 780 800 330 S1200 130 1500 530"
            stroke="#9cb7b7"
            strokeWidth="1"
          />
          <circle
            cx="1200"
            cy="120"
            r="160"
            stroke="#9cb7b7"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {/* Brand information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          >
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center text-3xl font-bold tracking-tight"
            >
              <span className="text-[#ffb900]">ℓ</span>
              earnna
            </a>

            <p className="mt-5 max-w-[240px] text-sm leading-7 text-white/55">
              Discover new skills, explore inspiring courses, and
              build a brighter future through online learning.
            </p>

            {/* Social media */}
            <div className="mt-6 flex items-center gap-3">
              {[
                // { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                // { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                // { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#ffb900] hover:bg-[#ffb900] hover:text-[#092b30]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <h3 className="mb-6 text-sm font-bold text-white">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-[#ffb900]"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-6 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Learnna. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/privacy"
              className="transition-colors hover:text-[#ffb900]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-[#ffb900]"
            >
              Terms & Conditions
            </a>

            <a
              href="/contact"
              className="transition-colors hover:text-[#ffb900]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




