"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { CanvasText } from "./ui/canvas-text";
export default function HeroScroll() {
  return (
    // Tambahkan -mt (negative margin top) dan pt-0
    <div className="flex flex-col overflow-hidden -mt-20 md:-mt-32 pt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl mb-10 font-semibold text-black dark:text-white">
              Lihat langsung hasil <br />
              <CanvasText
                text="Website Impianmu"
                // Contoh: Tambahkan text-5xl atau responsif (text-2xl di mobile, text-6xl di desktop)
                className="text-4xl sm:text-5xl md:text-7xl font-bold"
                backgroundClassName="bg-violet-500 dark:bg-violet-600"
                colors={[
                  "rgba(0, 153, 255, 1)",
                  "rgba(0, 153, 255, 0.8)",
                  "rgba(0, 153, 255, 0.6)",
                ]}
                lineGap={4}
                animationDuration={20}
              />
            </h1>
          </>
        }
      >
        <Image
          src="/project.png"
          alt="Tampilan hasil website"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
