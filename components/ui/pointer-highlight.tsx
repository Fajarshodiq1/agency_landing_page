"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef, useState, useLayoutEffect } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => updateDimensions());
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const hasDimensions = dimensions.width > 0 && dimensions.height > 0;

  return (
    <div
      className={cn("relative w-fit", containerClassName)}
      ref={containerRef}
    >
      {children}

      {hasDimensions && (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
          {/* Kotak Highlight Violet */}
          <motion.div
            className={cn(
              "absolute left-0 top-0 rounded-md border-2 border-violet-500/80 bg-violet-500/10 dark:border-violet-400 dark:bg-violet-400/10",
              rectangleClassName,
            )}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, dimensions.width, dimensions.width, dimensions.width],
              height: [
                0,
                dimensions.height,
                dimensions.height,
                dimensions.height,
              ],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.35, 0.85, 1], // 0.35s berkembang -> 1.6s diam di ujung -> 0.48s fade out
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
          />

          {/* Kursor Pointer Violet */}
          <motion.div
            className="pointer-events-none absolute left-0 top-0"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [
                0,
                dimensions.width + 2,
                dimensions.width + 2,
                dimensions.width + 2,
              ],
              y: [
                0,
                dimensions.height + 2,
                dimensions.height + 2,
                dimensions.height + 2,
              ],
              opacity: [0, 1, 1, 0],
            }}
            style={{
              rotate: -90,
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.35, 0.85, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
          >
            <Pointer
              className={cn(
                "h-3.5 w-3.5 text-violet-600 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)] dark:text-violet-400 sm:h-5 sm:w-5",
                pointerClassName,
              )}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

const Pointer = ({ ...props }: React.ReactSVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  );
};
