
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Cart from "./Cart";


import {
  ChevronDown,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

// Courses Mega Menu Data
const courseGroups = [
  {
    title: "FREE COURSES",
    links: [
     
      {
        label: "Advanced photoshop techniques for designers",
        path: "/courses/photoshop-design",
      },
    ],
  },
  {
    title: "FINANCE",
    links: [
      {
        label: "Understanding corporate finance and investments",
        path: "/courses/corporate-finance",
      },
    ],
  },
  {
    title: "DESIGN",
    links: [
      {
        label: "Advanced photoshop techniques for designers",
        path: "/courses/photoshop-design",
      },
    ],
  },
  
  {
    title: "MANAGEMENT",
    links: [
      {
        label: "Crisis management and problem-solving strategies",
        path: "/courses/crisis-management",
      },
    ],
  },
  {
    title: "DEVELOPMENT",
    links: [
      {
        label: "Building single page applications with Angular",
        path: "/courses/angular-development",
      },
    ],
  },
];

const navigation = [
  { name: "Home", path: "/" },
  { name: "Courses", megaMenu: true },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setActiveMenu(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setActiveMenu(false);
    setMobileOpen(false);
  };

  const [cartOpen, setCartOpen] = useState(false);

  return (

    
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseLeave={() => setActiveMenu(false)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || activeMenu || mobileOpen
          ? "bg-[#06272b]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center text-[27px] font-bold tracking-tight text-white"
        >
          <span className="mr-0.5 text-[#ffb900]">
            ℓ
          </span>
          earnna
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">

          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                if (item.megaMenu) {
                  setActiveMenu(true);
                } else {
                  setActiveMenu(false);
                }
              }}
            >
              {item.megaMenu ? (
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  aria-expanded={activeMenu}
                  aria-controls="courses-mega-menu"
                  className="flex items-center gap-1.5 py-7 text-[15px] font-semibold text-white transition-colors hover:text-[#ffb900]"
                >
                  Courses

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      activeMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={closeMenus}
                  className="block py-7 text-[15px] font-semibold text-white transition-colors hover:text-[#ffb900]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP ACCOUNT LINKS */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* <Link
            to="/cart"
            className="relative p-2 text-white transition hover:text-[#ffb900]"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} strokeWidth={1.5} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ffb900] px-1 text-[11px] font-bold text-[#092f33]">
              0
            </span>
          </Link> */}

            <button
  type="button"
  onClick={() => setCartOpen(true)}
  aria-label="Open shopping cart"
  className="relative p-2 text-white transition hover:text-[#ffb900]"
>
  <ShoppingBag size={21} strokeWidth={1.5} />

  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ffb900] px-1 text-[11px] font-bold text-[#092f33]">
    0
  </span>
</button>


          <div className="h-6 w-px bg-white/20" />

          <Link
            to="/login"
            className="text-sm font-semibold text-white transition hover:text-[#ffb900]"
          >
            Login
          </Link>

          <span className="-mx-3 text-white/40">|</span>

          <Link
            to="/register"
            className="text-sm font-semibold text-white transition hover:text-[#ffb900]"
          >
            Register
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* DESKTOP MEGA MENU */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            id="courses-mega-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-full hidden w-[calc(100%-60px)] max-w-[1200px] -translate-x-1/2 overflow-hidden rounded-b-xl bg-[#f1f8fa] shadow-2xl lg:block"
          >
            {/* MEGA MENU LINKS */}
            <div className="grid grid-cols-3 gap-x-12 gap-y-10 px-10 py-10">

              {courseGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#102c32]">
                    {group.title}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {group.links.map((link) => (
                      <Link
                        key={link.path + link.label}
                        to={link.path}
                        onClick={closeMenus}
                        className="text-sm leading-6 text-gray-500 transition-colors hover:text-[#2854e8]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* MEGA MENU PROMOTIONAL BANNER */}
            <div className="flex flex-col items-start justify-between gap-5 border-t border-gray-200 bg-[#e5f1f3] px-10 py-7 sm:flex-row sm:items-center">

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb900]/20 text-[#d69b00]">
                  <GraduationCap size={27} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#102c32]">
                    Increase your potential earnings
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Learn new skills and explore professional courses.
                  </p>
                </div>
              </div>

              <Link
                to="/courses"
                onClick={closeMenus}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#ffb900] text-[#102c32] transition hover:bg-[#102c32] hover:text-white"
                aria-label="Browse all courses"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-[#06272b] px-5 pb-5 lg:hidden"
          >
            {navigation.map((item) => (
              <div
                key={item.name}
                className="border-b border-white/10"
              >
                {item.megaMenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveMenu(!activeMenu)}
                      aria-expanded={activeMenu}
                      className="flex w-full items-center justify-between py-4 font-medium text-white"
                    >
                      Courses

                      <ChevronDown
                        size={17}
                        className={`transition-transform ${
                          activeMenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeMenu && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pb-4"
                        >
                          {courseGroups.map((group) => (
                            <div key={group.title} className="mb-5">
                              <h3 className="mb-2 text-xs font-bold text-[#ffb900]">
                                {group.title}
                              </h3>

                              {group.links.map((link) => (
                                <Link
                                  key={link.path + link.label}
                                  to={link.path}
                                  onClick={closeMenus}
                                  className="block py-2 pl-3 text-sm leading-6 text-white/70 transition hover:text-[#ffb900]"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenus}
                    className="block py-4 font-medium text-white transition hover:text-[#ffb900]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-wrap gap-6 pt-5">
              <Link to="/login" onClick={closeMenus} className="text-white">
                Login
              </Link>

              <Link to="/register" onClick={closeMenus} className="text-white">
                Register
              </Link>

              <Link to="/cart" onClick={closeMenus} className="text-white">
                Cart (0)
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      
<Cart
  isOpen={cartOpen}
  onClose={() => setCartOpen(false)}
/>
    </motion.header>


  );
}
