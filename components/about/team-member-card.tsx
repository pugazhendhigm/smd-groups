import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
  specialties?: string[];
  className?: string;
}

const backgroundClasses = [
  "luxury-bg-surface-1",
  "luxury-bg-surface-2",
  "luxury-bg-surface-3",
] as const;

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  specialties,
  className,
}: TeamMemberCardProps) {
  const backgroundClass =
    backgroundClasses[
      name.length % backgroundClasses.length
    ];

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_18px_45px_rgba(196,30,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_28px_60px_rgba(196,30,58,0.14)]",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]",
          backgroundClass
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="relative z-[1] object-contain object-top p-4 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5 lg:p-6"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-x-0 bottom-0 z-[2] border-t border-white/20 bg-[linear-gradient(180deg,transparent,rgba(69,10,10,0.92))] px-5 pb-5 pt-10">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/85">
            Leadership
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/72 sm:text-sm">
            {role}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>

        {specialties && specialties.length > 0 ? (
          <div className="mt-6 border-t border-border/80 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Specialties
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
