"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

export default function About() {
  return (
    <div className="min-h-screen px-6 py-10">
      <section className="max-w-2xl mx-auto text-center">
        <motion.img
          src="/about-hero.jpg"
          alt="About TalentBridge"
          className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-5"
          variants={fadeSlide}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Who We Are at TalentBridge
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-700 mb-10"
          variants={fadeSlide}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          TalentBridge connects driven professionals with visionary companies. Through trust and innovation, we foster mutual growth.
        </motion.p>
      </section>

      <motion.section
        className="max-w-2xl mx-auto text-left my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-4"
          variants={fadeSlide}
        >
          Our Values
        </motion.h3>
        <motion.ul
          className="space-y-3 text-gray-800"
          variants={fadeSlide}
          custom={1}
        >
          <li>🎯 Purpose-Driven: Aligning talent with meaningful roles.</li>
          <li>🤝 Collaboration: Growing together with partners.</li>
          <li>🔍 Transparency: Clear communication at every step.</li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="max-w-2xl mx-auto text-left my-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-4"
          variants={fadeSlide}
        >
          How It Works
        </motion.h3>
        <motion.ol
          className="list-decimal list-inside space-y-3 text-gray-800"
          variants={fadeSlide}
          custom={1}
        >
          <li>Create your profile.</li>
          <li>Browse or post opportunities.</li>
          <li>Match, apply, and collaborate.</li>
        </motion.ol>
      </motion.section>

      <motion.section
        className="max-w-2xl mx-auto text-center py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-5"
          variants={fadeSlide}
        >
          Ready to Begin?
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-700 mb-8"
          variants={fadeSlide}
          custom={1}
        >
          Start your journey with TalentBridge today.
        </motion.p>
        <motion.div variants={fadeSlide} custom={2}>
          <Link href="/jobs">
            <Button>Explore Opportunities</Button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
