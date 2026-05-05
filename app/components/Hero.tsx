"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/tta.mp4";

const FADE_DURATION = 0.5;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.style.opacity = "0";

    const tick = () => {
      const duration = video.duration;
      const time = video.currentTime;

      if (Number.isFinite(duration) && duration > 0) {
        let opacity = 1;
        if (time < FADE_DURATION) {
          opacity = time / FADE_DURATION;
        } else if (duration - time < FADE_DURATION) {
          opacity = Math.max(0, (duration - time) / FADE_DURATION);
        }
        video.style.opacity = String(Math.min(1, Math.max(0, opacity)));
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      }, 100);
    };

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    video.addEventListener("ended", handleEnded);
    if (video.readyState >= 2) {
      startPlayback();
    } else {
      video.addEventListener("loadeddata", startPlayback, { once: true });
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadeddata", startPlayback);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full"
      style={{ paddingTop: "calc(8rem - 75px)", paddingBottom: "10rem" }}
    >
      {/* Video background layer */}
      <div
        className="pointer-events-none absolute z-0"
        style={{ top: "300px", inset: "auto 0 0 0" }}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block"
          style={{ opacity: 0, transition: "opacity 0.05s linear" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-serif-display font-normal text-5xl sm:text-7xl md:text-8xl max-w-7xl animate-fade-rise"
          style={{
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
            color: "#000000",
          }}
        >
          Beyond <em className="italic" style={{ color: "#6F6F6F" }}>the noise,</em> I build{" "}
          <em className="italic" style={{ color: "#6F6F6F" }}>with purpose.</em>
        </h1>

        <p
          className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
          style={{ color: "#000000" }}
        >
          BBA student at North South University. Executive Associate at Paper
          Rhyme Advertising. Strategic partnerships, national-level event
          organizing, and outreach — building real-world impact one project at
          a time.
        </p>

        <p
          className="text-sm mt-4 tracking-wide uppercase animate-fade-rise-delay"
          style={{ color: "#000000" }}
        >
          📍 Dhaka, Bangladesh
        </p>

        <a
          href="#experience"
          className="rounded-full px-14 py-5 text-base mt-12 inline-block transition-transform duration-200 hover:scale-[1.03] animate-fade-rise-delay-2"
          style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
        >
          View My Journey
        </a>
      </div>
    </section>
  );
}
