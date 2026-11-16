"use client";

import { useEffect, useRef } from "react";

export function DottedGlowLayer() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      layer.style.setProperty("--glow-x", `${x}px`);
      layer.style.setProperty("--glow-y", `${y}px`);
    };

    const handleMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      layer.dataset.active = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const handleLeave = () => {
      layer.dataset.active = "false";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={layerRef} className="dotted-glow-layer" data-active="false" aria-hidden="true" />;
}
