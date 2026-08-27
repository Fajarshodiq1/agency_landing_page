"use client";

import { useRef } from "react";
import { Star, Zap, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const floatingBadges = [
  {
    icon: Zap,
    label: "Cepat",
    text: "Pengerjaan cepat & rapi",
    className: "top-[6%] right-[6%] sm:top-[10%] sm:right-[-2%]",
    delay: 0.9,
  },
  {
    icon: Clock,
    label: "Hemat Waktu",
    text: "Hemat waktu urusan harian",
    className: "top-[45%] right-[-2%] sm:top-[42%] sm:right-[-6%]",
    delay: 1.05,
  },
  {
    icon: TrendingUp,
    label: "Bisnis Naik Kelas",
    text: "Bantu bisnis kamu berkembang",
    className: "top-[76%] right-[2%] sm:top-[72%] sm:right-0",
    delay: 1.2,
  },
];

const clientLogos = [
  "Toko Bunda",
  "Warung Kito",
  "Kopi Senja",
  "Rumah Batik",
  "Berkah Jaya",
  "Dapur Nusantara",
  "Griya Kriya",
];

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=5",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=52",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};
const logoAccents = [
  "bg-lime-400 text-black",
  "bg-violet-500 text-white",
  "bg-gray-900 text-white",
  "bg-orange-400 text-white",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax: as the hero scrolls out of view, the illustration drifts
  // upward slightly slower/faster than the rest of the content.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -70],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1.06],
  );
  const badgesY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -30],
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#FAFAFA] px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:px-20"
    >
      {/* Background Decorative Circles */}
      <div className="pointer-events-none absolute -right-15 opacity-80 top-10 hidden h-48 w-48 rounded-full bg-violet-500 sm:block" />
      <div className="pointer-events-none absolute right-32 top-[55%] hidden h-12 w-12 rounded-full bg-violet-500 sm:block" />
      <div className="pointer-events-none absolute right-12 top-[62%] hidden h-24 w-24 rounded-full bg-violet-500 sm:block" />

      {/* Main Grid */}
      <div className="relative mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* ---------- LEFT COLUMN ---------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center lg:col-span-5 lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-lime-300 to-lime-100 text-xs font-medium sm:text-sm"
          >
            <span className="bg-lime-400 px-3 py-1.5 text-black sm:px-4 sm:py-2">
              Terpercaya
            </span>
            <span className="px-3 py-1.5 text-black sm:px-4 sm:py-2">
              Sudah bantu 100+ UMKM
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-5xl xl:text-6xl"
          >
            Wujudkan Website Profesional untuk{" "}
            <PointerHighlight containerClassName="mb-1 inline-block sm:mb-0">
              <span className="inline-block px-1">UMKM & Bisnis Kamu</span>
            </PointerHighlight>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-sm text-gray-500 sm:mt-6 sm:text-base lg:mx-0 lg:text-lg"
          >
            Kami bantu UMKM dan pelaku bisnis punya website yang menarik, cepat,
            dan mudah dikelola — supaya usahamu makin dipercaya dan makin banyak
            pelanggan baru dari internet.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start"
          >
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt="Pelanggan yang puas"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5"
                  strokeWidth={1.5}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <button className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-gray-800 active:scale-95 sm:text-base">
              Konsultasi Gratis
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:scale-[1.02] hover:bg-gray-50 active:scale-95 sm:text-base">
              Lihat Portofolio
            </button>
          </motion.div>
        </motion.div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="relative mt-4 flex justify-center lg:col-span-6 lg:mt-0">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gray-200/60 xs:h-72 xs:w-72 sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] xl:h-[540px] xl:w-[540px]"
          >
            {/* Soft cloud blobs */}
            <div className="absolute -left-6 top-4 h-14 w-14 rounded-full bg-gradient-to-br from-white to-violet-100 blur-sm sm:-left-10 sm:h-20 sm:w-20" />
            <div className="absolute -left-8 bottom-8 h-20 w-20 rounded-full bg-gradient-to-br from-white to-orange-100 blur-sm sm:-left-14 sm:bottom-10 sm:h-28 sm:w-28" />
            <div className="absolute bottom-0 right-6 h-10 w-10 rounded-full bg-gradient-to-br from-white to-orange-100 blur-sm sm:right-10 sm:h-14 sm:w-14" />

            {/* Gambar Ilustrasi */}
            <div className="relative h-[90%] w-[110%]">
              <Image
                src="/clay.png"
                alt="Ilustrasi jasa pembuatan website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div style={{ y: badgesY }} className="contents">
            {floatingBadges.map(
              ({ icon: Icon, label, text, className, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay }}
                  className={`absolute ${className}`}
                >
                  <motion.div
                    animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.5,
                    }}
                  >
                    {/* Versi mobile: bulatan ikon kecil */}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-lime-300 text-black shadow-lg md:hidden">
                      <Icon className="h-4 w-4" />
                    </span>
                    {/* Versi desktop: pill lengkap dengan teks */}
                    <div className="hidden items-center overflow-hidden bg-linear-to-r from-white from-10% via-slate-50 via-60% to-lime-400 to-90% shadow-xl md:flex p-1.5 rounded-full">
                      <span className="flex items-center gap-1 whitespace-nowrap bg-gradient-to-r rounded-full from-lime-400 to-lime-300 px-4 py-2.5 text-sm font-semibold text-black">
                        <Icon className="h-4 w-4" />
                        {label}
                      </span>
                      <span className="whitespace-nowrap px-4 py-2.5 text-sm font-medium text-gray-700">
                        {text}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* ---------- CLIENT LOGOS ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-5xl sm:mt-20 mb-18"
      >
        <h2 className="mb-8 px-2 text-center text-lg font-bold text-gray-900 sm:mb-10 sm:text-xl md:text-2xl">
          Dipercaya oleh pelaku UMKM & bisnis di seluruh Indonesia
        </h2>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused] sm:gap-4">
            {[...clientLogos, ...clientLogos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:gap-3 sm:px-5 sm:py-3.5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                    logoAccents[i % logoAccents.length]
                  }`}
                >
                  {getInitials(name)}
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-gray-700 sm:text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .marquee-track {
            animation: marquee 32s linear infinite;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
