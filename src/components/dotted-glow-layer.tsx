import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/**
 * Full-viewport animated dotted background.
 * Fixed behind all page content; the canvas animation stays subtle and
 * respects the global reduced-motion rules.
 */
export function DottedGlowLayer() {
  return (
    <div className="st-dot-bg" aria-hidden="true">
      <DottedGlowBackground
        className="pointer-events-none"
        opacity={1}
        gap={28}
        radius={1.15}
        colorLightVar="--st-dot"
        glowColorLightVar="--st-dot-glow"
        colorDarkVar="--st-dot"
        glowColorDarkVar="--st-dot-glow"
        backgroundOpacity={0}
        speedMin={0.25}
        speedMax={1.1}
        speedScale={1}
      />
    </div>
  );
}
