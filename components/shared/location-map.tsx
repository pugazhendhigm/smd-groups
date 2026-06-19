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
        "overflow-hidden rounded-[2rem] border border-accent/15 bg-[#15120e]",
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
        <div className="border-t border-accent/15 bg-[#12100d] px-4 py-3 text-center">
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
