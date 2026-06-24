import { cn } from "@/lib/utils";
import { contactInfo, mapDirectionsUrl, mapEmbedUrl } from "@/lib/data";

interface LocationMapProps {
  className?: string;
  showDirectionsLink?: boolean;
}

export function LocationMap({
  className,
  showDirectionsLink = false,
}: LocationMapProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <iframe
        title={`Map showing ${contactInfo.mapLocation}`}
        src={mapEmbedUrl}
        className="h-full min-h-[280px] w-full border-0 sm:min-h-[320px] md:min-h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {showDirectionsLink && (
        <div className="border-t border-border bg-secondary/40 px-4 py-3 text-center">
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Get Directions
          </a>
        </div>
      )}
    </div>
  );
}
