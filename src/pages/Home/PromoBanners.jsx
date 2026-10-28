import video from "../../assets/images/video.mp4"
import student from "../../assets/images/student.webp"

import { motion } from "motion/react";
import {
  ArrowRight,
  Video,
  Mic,
  Phone,
  Plus,
} from "lucide-react";

export default function PromoBanners() {
  return (
    <section className="bg-white px-5 pb-20 pt-4 sm:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-9">

        {/* FIRST BANNER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative flex min-h-[290px] overflow-hidden rounded-[5px] bg-[#edf6f8] sm:min-h-[300px]"
        >
          {/* Image */}
          <img
            src={student}
          
            alt="Student learning on a laptop"
            className="absolute bottom-0 right-0 h-full w-[64%] object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf6f8] via-[#edf6f8]/95 via-35% to-transparent" />

          {/* Text */}
          <div className="relative z-10 flex w-[75%] flex-col items-start justify-center p-6 sm:w-[65%] sm:p-8">
            <h3 className="max-w-[270px] text-xl font-semibold leading-snug text-[#102c32] sm:text-2xl">
              Quick access to the popular courses
            </h3>

            <a
              href="/courses"
              className="mt-7 inline-flex items-center gap-3 rounded-[4px] bg-[#ffb900] px-6 py-3.5 text-sm font-semibold text-[#102c32] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102c32] hover:text-white"
            >
              View Courses
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

        {/* SECOND BANNER */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative flex min-h-[290px] items-center overflow-hidden rounded-[5px] bg-[#f1f1e9] p-6 sm:min-h-[300px] sm:p-8"
        >
          {/* Text */}
          <div className="relative z-10 w-[50%]">
            <h3 className="max-w-[230px] text-xl font-semibold leading-snug text-[#102c32] sm:text-2xl">
              Develop your skills online!
            </h3>

            <a
              href="/register"
              className="mt-7 inline-flex items-center gap-2 rounded-[4px] bg-[#102c32] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffb900] hover:text-[#102c32]"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Video image */}
          <div className="relative ml-auto w-[50%] overflow-hidden rounded-xl shadow-sm sm:w-[52%]">
            <video src={video} muted autoPlay 
             alt="Teacher giving an online class"
            className="h-[170px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[220px]"></video>
              
             
           

            {/* Decorative video call controls */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14c76c] text-white sm:h-8 sm:w-8">
                <Plus size={16} />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-600 sm:h-8 sm:w-8">
                <Mic size={15} />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-600 sm:h-8 sm:w-8">
                <Video size={15} />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white sm:h-8 sm:w-8">
                <Phone size={15} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
