import Crises from "../../assets/images/Crisis.webp"
import bobstu from "../../assets/images/bobstu.webp"
import bob from "../../assets/images/bob.webp"
import comp2 from "../../assets/images/comp2.webp"
import finance from "../../assets/images/finance.webp"
import chatal from "../../assets/images/computer.webp"
import RelatedCourses from "../Detailes/RelatedCourses";
import CourseCTA from "../Detailes/CourseCTA";
import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock3,
  BookOpen,
  GraduationCap,
  Video,
  Users,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle2,
  HelpCircle,
  Send,
} from "lucide-react";

const courses = {
  "corporate-finance": {
    category: "Finance",
    title: "Understanding corporate finance and investments",
    rating: "4.9",
    reviews: 210,
    duration: "10 weeks",
    level: "Expert",
    students: "8k",
    instructor: "Alex Morgan",
    image:` ${finance}`,
    description:
      "Learn the principles of corporate finance, investment decisions, and financial management through practical examples.",
    lessons: [
      {
        title: "Introduction to Corporate Finance",
        heading: "Introduction to Corporate Finance and Investments",
        summary:
          "This lesson introduces corporate finance, its main objectives, and how businesses make financial decisions.",
        description:
          "Corporate finance focuses on how companies manage money, raise capital, evaluate investments, and create long-term value.",
        features: [
          "Understand the meaning of corporate finance",
          "Identify the main financial decisions in business",
          "Explore the relationship between risk and return",
          "Learn why investment planning matters",
        ],
        image: ` ${finance}`,
        video: "",
      },
      {
        title: "Main Features of Finance",
        heading: "Main features",
        summary:
          "An overview of the major functions and characteristics of corporate financial management.",
        description:
          "In this lesson, we explore the important features that help businesses manage resources and make informed decisions.",
        features: [
          "Financial planning and forecasting",
          "Capital investment decisions",
          "Working capital management",
          "Risk and return analysis",
          "Financial reporting and performance evaluation",
          "Long-term business growth",
        ],
        image:` ${chatal}`,
        video: "",
      },
      {
        title: "Financial Statements",
        heading: "Understanding Financial Statements",
        summary:
          "Learn how the balance sheet, income statement, and cash flow statement describe a company's financial position.",
        description:
          "Financial statements help investors, managers, and business owners understand performance and financial health.",
        features: [
          "Balance sheets",
          "Income statements",
          "Cash flow statements",
          "Assets and liabilities",
        ],
        image: ` ${chatal}`,
        video: "",
      },
      {
        title: "Investment Decisions",
        heading: "Making Smart Investment Decisions",
        summary:
          "Learn how companies compare investment opportunities using expected returns, costs, and risks.",
        description:
          "Investment decisions are an important part of financial planning and business development.",
        features: [
          "Investment opportunities",
          "Risk assessment",
          "Return on investment",
          "Capital budgeting",
        ],
        image: ` ${chatal}`,
        video: "",
      },
      {
        title: "Risk and Return",
        heading: "Understanding Risk and Return",
        summary:
          "Discover the relationship between financial risk, expected returns, and diversification.",
        description:
          "This lesson introduces basic strategies used to understand and manage investment risk.",
        features: [
          "Types of financial risk",
          "Expected returns",
          "Diversification",
          "Risk management strategies",
        ],
        image: ` ${chatal}`,
        video: "",
      },
    ],
  },
  "photoshop-design": {
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    rating: "5.0",
    reviews: 1200,
    duration: "8 weeks",
    level: "Intermediate",
    students: "25k",
    instructor: "Emma Wilson",
    image: `${bob}`,
    description:
      "Develop professional image editing and visual design skills.",
    lessons: [
      {
        title: "Photoshop Workspace",
        heading: "Getting Started with Photoshop",
        summary: "Understand the workspace, panels, and tools.",
        description: "Explore the essential parts of Photoshop.",
        features: ["Workspace layout", "Layers", "Selection tools"],
        image: `${bob}`,
        video: "",
      },
    ],
  },
  "crisis-management": {
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    rating: "4.88",
    reviews: 210,
    duration: "6 weeks",
    level: "Intermediate",
    students: "8k",
    instructor: "James Carter",
    image: `${Crises}`,
    description: "Develop practical crisis response and leadership skills.",
    lessons: [
      {
        title: "Introduction to Crisis Management",
        heading: "Understanding Crisis Management",
        summary: "Learn how organizations identify and respond to crises.",
        description: "Explore the foundations of crisis management.",
        features: ["Crisis identification", "Planning", "Communication"],
        image: `${comp2}`,
        video: "",
      },
    ],
  },
  "angular-development": {
    category: "Development",
    title: "Building single page applications with Angular",
    rating: "5.0",
    reviews: 328,
    duration: "8 weeks",
    level: "Intermediate",
    students: "5k",
    instructor: "Daniel Smith",
    image: ` ${finance}`,
    description: "Learn to build modern single-page applications.",
    lessons: [
      {
        title: "Introduction to Angular",
        heading: "Getting Started with Angular",
        summary: "Understand Angular components and project structure.",
        description: "Explore the foundations of Angular development.",
        features: ["Components", "Templates", "Routing"],
        image: ` ${chatal}`,
        video: "",
      },
    ],
  },
};

const tabs = [
  "Overview",
  "Curriculum",
  "Instructor",
  "FAQ",
  "Query",
];

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses[slug];

  const [activeTab, setActiveTab] = useState("Curriculum");
  const [activeLesson, setActiveLesson] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");

  if (!course) {
    return (
      <div className="min-h-screen bg-[#edf5f7] px-5 py-40 text-center">
        <h1 className="text-3xl font-bold text-[#102c32]">
          Course not found
        </h1>
        <Link to="/courses" className="mt-6 inline-block text-blue-600">
          Back to courses
        </Link>
      </div>
    );
  }

  const lesson = course.lessons[activeLesson];

  const nextLesson = () => {
    setActiveLesson((prev) =>
      Math.min(prev + 1, course.lessons.length - 1)
    );
  };

  const previousLesson = () => {
    setActiveLesson((prev) => Math.max(prev - 1, 0));
  };

  const details = [
    { icon: Clock3, label: "Time span", value: course.duration },
    { icon: BookOpen, label: "Lectures", value: `${course.lessons.length} Lessons` },
    { icon: GraduationCap, label: "Skill level", value: course.level },
    { icon: Video, label: "Video lessons", value: `${course.lessons.filter((l) => l.video).length} videos` },
    { icon: Users, label: "Students", value: `${course.students} Enrolled` },
  ];

  return (
    <main className="min-h-screen bg-white text-[#102c32]">
      {/* DARK HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#092b30] pt-36 pb-32 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#092b30] via-[#092b30]/90 to-transparent" />

        <img
          src={course.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[1200px] px-5 sm:px-8"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-[#ffb900]">
            {course.category}
          </span>

          <h1 className="mt-5 max-w-[780px] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex gap-1 text-[#ffb900]">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={17} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-white/75">
              {course.rating} ({course.reviews} Reviews)
            </span>
          </div>
        </motion.div>
      </section>

      {/* COURSE DETAILS */}
      <section className="relative z-10 mx-auto -mt-14 max-w-[1200px] px-5 pb-24 sm:px-8">
        <div className="bg-white p-6 shadow-xl shadow-black/5 md:p-10">
          <div className="grid grid-cols-2 gap-6 border-b border-gray-200 pb-10 md:grid-cols-3 lg:grid-cols-5">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={29} strokeWidth={1.3} className="shrink-0 text-[#102c32]" />
                <div>
                  <h3 className="text-sm font-semibold">{label}</h3>
                  <p className="mt-1 text-xs text-gray-500">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TABS */}
          <div
            role="tablist"
            aria-label="Course information"
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-sm px-5 py-3 text-sm font-semibold transition-all sm:px-7 ${
                  activeTab === tab
                    ? "bg-[#102c32] text-white shadow-lg"
                    : "bg-[#edf5f7] text-[#102c32] hover:bg-[#ffb900]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === "Overview" && (
                  <div className="mx-auto max-w-[850px]">
                    <h2 className="text-3xl font-bold">Course Overview</h2>
                    <p className="mt-5 leading-8 text-gray-600">
                      {course.description}
                    </p>

                    <h3 className="mt-9 text-xl font-bold">
                      What you'll learn
                    </h3>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {course.lessons.map((item) => (
                        <div key={item.title} className="flex gap-3">
                          <CheckCircle2 size={20} className="shrink-0 text-[#e3aa00]" />
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Curriculum" && (
                  <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
                    {/* LESSON BUTTONS */}
                    <aside>
                      <h3 className="mb-5 text-lg font-bold">
                        Course Lessons
                      </h3>

                      <div className="flex flex-col gap-3">
                        {course.lessons.map((item, index) => (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => setActiveLesson(index)}
                            aria-pressed={activeLesson === index}
                            className={`w-full rounded-sm px-5 py-4 text-left text-sm font-semibold transition-all ${
                              activeLesson === index
                                ? "bg-[#102c32] text-white shadow-md"
                                : "bg-[#edf5f7] text-[#102c32] hover:bg-[#ffb900]"
                            }`}
                          >
                            Lesson {index + 1}
                          </button>
                        ))}
                      </div>
                    </aside>

                    {/* SELECTED LESSON */}
                    <div className="min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.article
                          key={`${slug}-${activeLesson}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-xs font-bold uppercase tracking-widest text-[#e3aa00]">
                            Lesson {activeLesson + 1} of {course.lessons.length}
                          </span>

                          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                            {lesson.heading}
                          </h2>

                          <h3 className="mt-7 text-lg font-semibold">
                            Introduction
                          </h3>

                          <p className="mt-3 leading-8 text-gray-600">
                            {lesson.description}
                          </p>

                          <h3 className="mt-8 text-xl font-bold">
                            Main features
                          </h3>

                          <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-600">
                            {lesson.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>

                          {/* VIDEO OR IMAGE */}
                          <div className="mt-9 overflow-hidden rounded-lg bg-[#edf5f7]">
                            {lesson.video ? (
                              <video
                                key={lesson.video}
                                controls
                                preload="metadata"
                                poster={lesson.image}
                                className="aspect-video w-full bg-black object-contain"
                              >
                                <source src={lesson.video} type="video/mp4" />
                                Your browser does not support video.
                              </video>
                            ) : (
                              <img
                                src={lesson.image}
                                alt={lesson.heading}
                                loading="lazy"
                                className="aspect-video w-full object-cover"
                              />
                            )}
                          </div>

                          {/* LESSON SUMMARY */}
                          <div className="mt-8 rounded-lg border-l-4 border-[#ffb900] bg-[#edf5f7] p-6">
                            <h3 className="flex items-center gap-2 text-lg font-bold">
                              <BookOpen size={20} />
                              Lesson Summary
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                              {lesson.summary}
                            </p>
                          </div>

                          {/* PREVIOUS / NEXT */}
                          <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-200 pt-7">
                            <button
                              type="button"
                              onClick={previousLesson}
                              disabled={activeLesson === 0}
                              className="inline-flex items-center gap-2 rounded-sm bg-[#102c32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e3aa00] hover:text-[#102c32] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              <ArrowLeft size={17} />
                              Previous
                            </button>

                            <button
                              type="button"
                              onClick={nextLesson}
                              disabled={activeLesson === course.lessons.length - 1}
                              className="inline-flex items-center gap-2 rounded-sm bg-[#102c32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e3aa00] hover:text-[#102c32] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              Next Lesson
                              <ArrowRight size={17} />
                            </button>
                          </div>
                        </motion.article>
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {activeTab === "Instructor" && (
                  <div className="mx-auto max-w-[750px] rounded-lg bg-[#edf5f7] p-8">
                    <GraduationCap size={40} />
                    <h2 className="mt-5 text-2xl font-bold">
                      {course.instructor}
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600">
                      Course instructor. Add the instructor's biography,
                      experience, and qualifications here.
                    </p>
                  </div>
                )}

                {activeTab === "FAQ" && (
                  <div className="mx-auto max-w-[800px]">
                    <h2 className="mb-7 text-2xl font-bold">
                      Frequently Asked Questions
                    </h2>

                    {[
                      {
                        q: "Can I learn at my own pace?",
                        a: "Yes, the lesson content is organized so you can work through it in order.",
                      },
                      {
                        q: "What do I need to start?",
                        a: "A computer or phone and access to the course materials.",
                      },
                      {
                        q: "Will I receive a certificate?",
                        a: "Certificate availability depends on the course provider.",
                      },
                    ].map((faq, index) => (
                      <div key={faq.q} className="border-b border-gray-200">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                          aria-expanded={openFaq === index}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
                        >
                          {faq.q}
                          <HelpCircle size={19} />
                        </button>
                        {openFaq === index && (
                          <p className="pb-5 leading-7 text-gray-600">{faq.a}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Query" && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!question.trim()) return;
                      setSubmittedQuestion(question.trim());
                      setQuestion("");
                    }}
                    className="mx-auto max-w-[750px]"
                  >
                    <h2 className="text-2xl font-bold">Ask a Question</h2>
                    <p className="mt-3 text-gray-500">
                      Have a question about this course? Write it below.
                    </p>

                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Write your question..."
                      required
                      rows={5}
                      className="mt-6 w-full rounded-md border border-gray-200 p-4 outline-none focus:border-[#ffb900]"
                    />

                    <button
                      type="submit"
                      className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#102c32] px-6 py-3 font-semibold text-white hover:bg-[#ffb900] hover:text-[#102c32]"
                    >
                      <Send size={17} />
                      Save Question
                    </button>

                    {submittedQuestion && (
                      <div className="mt-6 rounded-md bg-[#edf5f7] p-5">
                        <p className="text-sm font-bold">Your question (local preview)</p>
                        <p className="mt-2 break-words text-gray-600">
                          {submittedQuestion}
                        </p>
                        <p className="mt-2 text-xs text-gray-500">
                          This question has not been sent to an instructor.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      
      {/* Related Courses */}
      <RelatedCourses />

      {/* Course CTA */}
      <CourseCTA />
    </main>
  );
}
