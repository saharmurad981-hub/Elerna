
import { useState } from "react";
import { motion } from "motion/react";
import teacher12 from "../../assets/images/teacher13.webp"
import hero from "../../assets/images/cont.webp"
import {
  House,
  NotebookTabs,
  AlarmClock,
  ArrowRight,
  CheckCircle2,
  Send,
} from "lucide-react";

// =====================================
// ANIMATIONS
// =====================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// =====================================
// CONTACT INFORMATION
// =====================================

const contactInfo = [
  {
    icon: House,
    title: "Area location",
    lines: ["410 Sandtown, California", "94001, USA"],
  },
  {
    icon: NotebookTabs,
    title: "Contact details",
    lines: ["888-123-4567", "info@example.com"],
  },
  {
    icon: AlarmClock,
    title: "Opening hours",
    lines: ["Monday-Friday", "10:30a.m-7:00p.m"],
  },
];

// =====================================
// MAIN CONTACT COMPONENT
// =====================================

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    saveInfo: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo validation only.
    // Connect a backend or form service before production.
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus("Please complete all required fields.");
      return;
    }

    setStatus(
      "Your form is valid. Connect a backend to send messages."
    );
  };

  return (
    <main className="overflow-hidden bg-white text-[#10272c]">

      {/* =====================================
          CONTACT HERO
      ===================================== */}

      <section
        className="relative flex min-h-[470px] items-center bg-[#10272c] bg-cover bg-center px-5 pt-28 text-white sm:px-8 lg:min-h-[520px] lg:px-10"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.76),
              rgba(0,0,0,0.57)
            ),
            url(${hero})
          `,
        }}
      >
        <div className="mx-auto w-full max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-[72px]">
              Contact us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          CONTACT INTRO
      ===================================== */}

      <section className="px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-[1350px]">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-[850px] text-center"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.06em]">
              Contact us
            </p>

            <h2 className="text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]">
              Get details information about
              <br className="hidden lg:block" />
              online courses, contact us. we’re
              <br className="hidden lg:block" />
              happy to discuss
            </h2>

            <p className="mx-auto mt-7 max-w-[650px] text-[16px] leading-8 text-[#858585]">
              Lorem ipsum dolor sit amet consectetur.
              Neque libero donec hendrerit nam id purus
              suspendisse. Imperdiet nam lorem tempus in.
            </p>
          </motion.div>

          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`flex items-start gap-5 md:px-8 lg:px-12 ${
                    index !== 0
                      ? "md:border-l md:border-[#e1e5e6]"
                      : "md:pl-0"
                  }`}
                >
                  <div className="shrink-0 text-[#10272c]">
                    <Icon size={40} strokeWidth={1.15} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      {item.title}
                    </h3>

                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm leading-7 text-[#858585]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          CONTACT FORM SECTION
      ===================================== */}

      <section className="relative pb-0 pt-16 lg:pt-24">

        {/* Decorative background title */}

        <div className="pointer-events-none absolute left-0 top-4 w-full overflow-hidden text-center">
          <span className="whitespace-nowrap text-[55px] font-bold uppercase tracking-tight text-[#f2f4f5] sm:text-[85px] lg:text-[115px]">
            Touch with me today
          </span>
        </div>

        <div className="relative mx-auto max-w-[1500px]">

          <div className="grid grid-cols-1 items-stretch lg:grid-cols-[57%_43%]">

            {/* =====================================
                LEFT IMAGE
            ===================================== */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9 }}
              className="relative min-h-[350px] overflow-hidden sm:min-h-[450px] lg:min-h-[680px]"
            >
              <img
                src={teacher12}
                alt="Students participating in a learning session"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#10272c]/5" />
            </motion.div>

            {/* =====================================
                RIGHT FORM
            ===================================== */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative z-10 flex items-center bg-white px-6 py-12 shadow-[0_10px_50px_rgba(0,0,0,0.06)] sm:px-10 lg:-ml-10 lg:my-8 lg:px-12 lg:py-14"
            >
              <div className="w-full">

                <h2 className="mb-4 text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
                  Fill out for contact
                </h2>

                <p className="mb-8 text-[16px] leading-7 text-[#858585]">
                  Lorem ipsum dolor sit amet consectetur
                  libero donec.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* NAME */}

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-[54px] w-full rounded-[3px] border border-[#cbd2d4] bg-white px-5 text-[#10272c] outline-none transition-all duration-300 placeholder:text-[#b5b5b5] focus:border-[#10272c] focus:ring-2 focus:ring-[#10272c]/10"
                  />

                  {/* EMAIL */}

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email*"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-[54px] w-full rounded-[3px] border border-[#cbd2d4] bg-white px-5 text-[#10272c] outline-none transition-all duration-300 placeholder:text-[#b5b5b5] focus:border-[#10272c] focus:ring-2 focus:ring-[#10272c]/10"
                  />

                  {/* SUBJECT */}

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-[3px] border border-[#cbd2d4] bg-white px-5 text-[#10272c] outline-none transition-all duration-300 placeholder:text-[#b5b5b5] focus:border-[#10272c] focus:ring-2 focus:ring-[#10272c]/10"
                  />

                  {/* MESSAGE */}

                  <textarea
                    name="message"
                    placeholder="Your message*"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="min-h-[170px] w-full resize-y rounded-[3px] border border-[#cbd2d4] bg-white px-5 py-4 text-[#10272c] outline-none transition-all duration-300 placeholder:text-[#b5b5b5] focus:border-[#10272c] focus:ring-2 focus:ring-[#10272c]/10"
                  />

                  {/* CHECKBOX */}

                  <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-6 text-[#858585]">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={form.saveInfo}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 accent-[#10272c]"
                    />

                    <span>
                      Save information for the next time comment.
                    </span>
                  </label>

                  {/* SUBMIT */}

                  <motion.button
                    type="submit"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 inline-flex min-h-[55px] items-center justify-center gap-3 rounded-[3px] bg-[#10272c] px-10 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#ffb900] hover:text-[#10272c]"
                  >
                    Send Message
                    <ArrowRight size={18} />
                  </motion.button>

                  {/* STATUS */}

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="status"
                      className="flex items-start gap-3 rounded-md bg-[#eef6f8] p-4 text-sm text-[#10272c]"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0"
                      />
                      <span>{status}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
