"use client";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

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
          className="w-full h-full"
        >
          <Navbar />
          <Hero />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
