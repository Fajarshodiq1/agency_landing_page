"use client";

import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-200/50 text-neutral-400 ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
    </div>
  );
}

function CardText({
  title,
  body,
  dark = false,
}: {
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="relative z-10">
      <h3
        className={`text-xl sm:text-3xl font-semibold tracking-tight transition-colors duration-500 ${
          dark
            ? "text-neutral-900 group-hover:text-lime-300"
            : "text-neutral-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-500 ${
          dark
            ? "text-neutral-800/80 group-hover:text-neutral-300"
            : "text-neutral-500"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

// ===== Animation variants & transitions (typed) =====

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardHoverTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 20,
};

const circleRevealVariants: Variants = {
  rest: { clipPath: "circle(0% at 100% 0%)" },
  hover: { clipPath: "circle(150% at 100% 0%)" },
};

const circleRevealTransition: Transition = {
  duration: 0.6,
  ease: [0.65, 0, 0.35, 1],
};

const viewportSettings = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px",
} as const;

export function Services() {
  return (
    <section className="min-h-screen w-full px-4 py-10 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-5 max-w-5xl text-center"
      >
        <span className="mb-2 inline-flex rounded-full bg-lime-300 px-5 py-2 text-center text-2xl font-bold">
          Services
        </span>

        <h1 className="mb-10 text-center text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          Semua yang Bisnis Kamu Butuhkan untuk Tampil Profesional di Digital
        </h1>
      </motion.div>

      <div className="mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Custom Website */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={cardHoverTransition}
          className="rounded-3xl bg-neutral-100 p-8"
        >
          <div className="relative -mx-4 -mt-2 mb-6 h-72 w-[calc(100%+2rem)] sm:h-[32rem]">
            <Image
              src="/saly-12.svg"
              alt="Ilustrasi desain website custom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          <CardText
            title="Custom Website"
            body="Website dirancang khusus sesuai karakter brand, kebutuhan bisnis, dan target pelanggan agar tampil lebih unik dan profesional."
          />
        </motion.div>

        {/* Digital Strategy */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={cardHoverTransition}
          className="rounded-3xl bg-neutral-100 p-8"
        >
          <div className="relative -mx-4 -mt-2 mb-6 h-72 w-[calc(100%+2rem)] sm:h-[32rem]">
            <Image
              src="/stats.svg"
              alt="Ilustrasi strategi digital"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          <CardText
            title="Digital Strategy"
            body="Kami menyusun website dengan strategi yang jelas untuk membantu bisnis membangun brand, menyampaikan nilai, dan mencapai tujuan digital."
          />
        </motion.div>

        {/* Responsive Design + User Experience */}
        <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-[1.6fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={cardHoverTransition}
            className="flex flex-col justify-between gap-6 rounded-3xl bg-neutral-100 p-8 sm:flex-row sm:items-center"
          >
            <CardText
              title="Responsive Design"
              body="Tampilan website tetap nyaman dan menarik di berbagai perangkat, mulai dari desktop, tablet, hingga smartphone."
            />

            <div className="relative -mx-4 -mt-2 mb-6 h-72 w-[calc(100%+2rem)] sm:h-[18rem]">
              <Image
                src="/saly-11.svg"
                alt="Ilustrasi responsive website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* User Experience - circle reveal lime -> hitam dari kanan atas */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportSettings}
            variants={cardVariants}
            className="relative"
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-lime-400 p-8"
            >
              <motion.div
                variants={circleRevealVariants}
                transition={circleRevealTransition}
                className="absolute inset-0 bg-black"
              />

              <CardText
                dark
                title="User Experience"
                body="Kami menciptakan pengalaman yang sederhana dan intuitif agar pengunjung mudah menemukan informasi dan mengenal bisnis kamu."
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Performance */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={cardHoverTransition}
          className="rounded-3xl bg-neutral-100 p-8"
        >
          <CardText
            title="Fast & Optimized"
            body="Website dibangun dengan performa yang optimal agar cepat diakses, responsif, dan memberikan pengalaman terbaik bagi pengunjung."
          />
        </motion.div>

        {/* SEO */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={cardHoverTransition}
          className="rounded-3xl bg-neutral-100 p-8"
        >
          <CardText
            title="SEO Ready"
            body="Website dipersiapkan agar lebih mudah ditemukan di mesin pencari sehingga bisnis kamu memiliki peluang menjangkau lebih banyak calon pelanggan."
          />
        </motion.div>
      </div>
    </section>
  );
}
