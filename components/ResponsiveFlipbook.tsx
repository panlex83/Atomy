"use client";

import { useEffect, useRef, useState } from "react";

const BASE_WIDTH = 1200;
const BASE_HEIGHT = 820;

export default function ResponsiveFlipbook() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const update = () => {
      const width = host.clientWidth;
      setScale(Math.min(1, width / BASE_WIDTH));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  const scaledHeight = BASE_HEIGHT * scale;

  return (
    <div ref={hostRef} className="w-full overflow-hidden rounded-[28px] bg-[#8f8f8f] shadow-2xl shadow-black/20">
      <div className="relative w-full" style={{ height: `${scaledHeight}px` }}>
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: `${BASE_WIDTH}px`, height: `${BASE_HEIGHT}px`, transform: `scale(${scale})` }}
        >
          <iframe
            src="https://heyzine.com/flip-book/3b7be4e8fe.html"
            title="Atomy catalog flipbook"
            className="h-full w-full border-0"
            allow="clipboard-write; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
