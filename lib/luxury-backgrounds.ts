import luxuryBg from "@/assets/luxury-bg.png";
import luxuryBg2 from "@/assets/luxury-bg-2.png";
import luxuryBg3 from "@/assets/luxury-bg-3.png";
import luxuryBg4 from "@/assets/luxury-bg-4.png";
import type { StaticImageData } from "next/image";

export const luxuryBackgrounds = {
  primary: luxuryBg,
  secondary: luxuryBg2,
  tertiary: luxuryBg3,
  quaternary: luxuryBg4,
} as const;

export type LuxuryBackgroundVariant = keyof typeof luxuryBackgrounds;

export const luxuryBackgroundVariants: LuxuryBackgroundVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
];

export function getLuxuryBackground(
  variant: LuxuryBackgroundVariant
): StaticImageData {
  return luxuryBackgrounds[variant];
}

export function getLuxuryBackgroundStyle(
  variant: LuxuryBackgroundVariant
): string {
  return `url(${luxuryBackgrounds[variant].src})`;
}

export const luxuryBackgroundCssVars = {
  "--luxury-bg-image": getLuxuryBackgroundStyle("primary"),
  "--luxury-bg-image-2": getLuxuryBackgroundStyle("secondary"),
  "--luxury-bg-image-3": getLuxuryBackgroundStyle("tertiary"),
  "--luxury-bg-image-4": getLuxuryBackgroundStyle("quaternary"),
} as const;
