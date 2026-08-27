import { ImageIcon } from "lucide-react";

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
      <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>
      <p
        className={`mt-2 max-w-sm text-sm leading-relaxed ${
          dark ? "text-neutral-800/80" : "text-neutral-500"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="min-h-screen w-full bg-white px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Customized Design */}
        <div className="rounded-3xl bg-neutral-100 p-8">
          <ImagePlaceholder className="mb-8 h-56 w-full" />
          <CardText
            title="Customized Design"
            body="Tailored website solutions that reflect your brand's identity and resonate with your target audience"
          />
        </div>

        {/* Strategic Planning */}
        <div className="rounded-3xl bg-neutral-100 p-8">
          <ImagePlaceholder className="mb-8 h-56 w-full" />
          <CardText
            title="Strategic Planning"
            body="Meticulous planning to align website design and development with your specific business goals and digital aspirations"
          />
        </div>

        {/* Responsive Design + User Centric Focus row */}
        <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-neutral-100 p-8 sm:flex-row sm:items-center">
            <CardText
              title="Responsive Design"
              body="Meticulous planning to align website design and development with your specific business goals and digital aspirations"
            />
            <ImagePlaceholder className="h-40 w-full sm:h-full sm:w-52 sm:shrink-0" />
          </div>

          <div className="flex flex-col justify-end rounded-3xl bg-lime-400 p-8">
            <CardText
              dark
              title="User Centric Focus"
              body="Prioritizing user experience through intuitive interfaces, fostering engagement and satisfaction"
            />
          </div>
        </div>

        {/* Performance + SEO row */}
        <div className="rounded-3xl bg-neutral-100 p-8">
          <CardText
            title="Performance Optimization"
            body="Implementing techniques to enhance website speed, responsiveness, and overall performance"
          />
        </div>

        <div className="rounded-3xl bg-neutral-100 p-8">
          <CardText
            title="SEO Integration"
            body="Incorporating search engine optimization strategies to boost visibility and drive organic traffic to your website"
          />
        </div>
      </div>
    </section>
  );
}
