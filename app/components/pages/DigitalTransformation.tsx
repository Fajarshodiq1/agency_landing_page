import { CanvasText } from "@/components/ui/canvas-text";
import { BadgeCheck, ShieldCheck, Earth, LucideIcon } from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: BadgeCheck,
    title: "Tampil Lebih Profesional",
    description:
      "Bangun kesan pertama yang kuat melalui website dengan desain modern dan profesional. Tampilkan identitas, layanan, dan keunggulan perusahaan dengan cara yang lebih menarik dan meyakinkan.",
  },
  {
    icon: ShieldCheck,
    title: "Bangun Kepercayaan Pelanggan",
    description:
      "Perusahaan yang hadir secara profesional di dunia digital akan lebih mudah dipercaya. Website membantu memperkuat kredibilitas dan memberikan pelanggan informasi yang jelas tentang bisnis kamu.",
  },
  {
    icon: Earth,
    title: "Jangkau Lebih Banyak Pelanggan",
    description:
      "Jangan biarkan bisnis kamu hanya dikenal dari rekomendasi atau cara konvensional. Hadir secara online dan buat bisnis kamu lebih mudah ditemukan oleh calon pelanggan kapan saja dan dari mana saja.",
  },
];

export function DigitalTransformation() {
  return (
    <section className="py-10">
      <h1 className="text-4xl sm:text-5xl my-10 font-semibold text-black text-center max-w-2xl mx-auto">
        Saatnya Bisnis Anda Tampil <br />
        <CanvasText
          text="Lebih Digital"
          className="text-4xl sm:text-5xl font-bold mt-2"
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

      <div className="flex flex-col md:flex-row gap-5 w-full px-5 md:px-10 mx-auto">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative w-full bg-lime-300 rounded-3xl overflow-hidden"
          >
            {/* layer hitam yang menyapu dari kiri atas */}
            <span
              className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] rounded-full bg-black scale-0 origin-top-left transition-transform duration-500 ease-out group-hover:scale-100"
              aria-hidden="true"
            />

            {/* konten di atas layer */}
            <div className="relative z-10 flex flex-col justify-between h-full m-5">
              {/* icon */}
              <div className="bg-black w-fit rounded-full p-2 m-5 transition-colors duration-300 delay-150 group-hover:bg-lime-300">
                <Icon className="w-10 h-10 fill-lime-300 transition-colors duration-300 delay-150 group-hover:fill-white" />
              </div>

              {/* content */}
              <div className="m-5 pb-5">
                <h2 className="font-bold text-2xl tracking-wide transition-colors duration-300 delay-150 group-hover:text-lime-300">
                  {title}
                </h2>
                <p className="text-lg mt-2 tracking-wide text-black/80 transition-colors duration-300 delay-150 group-hover:text-lime-300/80">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
