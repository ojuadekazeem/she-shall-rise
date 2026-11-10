"use client";

import { useEffect, useRef, useState } from "react";
import SphereImageGrid, { type ImageData } from "@/components/ui/image-sphere";

const MAX_SIZE = 600;

/**
 * Sizes the image sphere to its column width (the component itself takes a
 * fixed pixel size), and scales the sphere radius with it.
 */
export default function SphereGallery({ images }: { images: ImageData[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(MAX_SIZE);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setSize(Math.min(MAX_SIZE, Math.floor(el.clientWidth)));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="sphere-gallery">
      <SphereImageGrid
        images={images}
        containerSize={size}
        sphereRadius={Math.round(size * 0.38)}
        dragSensitivity={0.8}
        momentumDecay={0.96}
        maxRotationSpeed={6}
        baseImageScale={size < 420 ? 0.24 : 0.2}
        hoverScale={1.3}
        perspective={1000}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </div>
  );
}
