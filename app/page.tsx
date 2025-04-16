"use client";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Features } from "./components/Featres";
import { Notifications } from "./components/Notifications";

export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-full h-full overflow-hidden"
        >
          <Navbar />
          <Hero />
        </motion.div>
        <div className="w-full min-h-screen md:mt-0 mt-16 bg-white">
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-foreground"></div> */}
          <div className="w-full bg-foreground gap-12 md:gap-0 flex-col md:flex-row md:flex items-center justify-center p-2 md:p-8 md:py-0 py-8">
            <div className="w-full flex justify-center items-center mb-8 md:mt-[40vh] md:w-1/2 h-max">
              <Features />
            </div>
            <div className="w-full md:w-1/2">
              <Notifications />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
