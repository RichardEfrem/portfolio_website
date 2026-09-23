"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from "react-icons/fi";
import type { Shot } from "@/data/projects";

const arrow =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-base/80 text-mute backdrop-blur transition-colors hover:border-dim hover:text-ink";

export default function Gallery({
  shots,
  title,
}: {
  shots: Shot[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const shot = shots[index];
  const count = String(shots.length).padStart(2, "0");

  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + shots.length) % shots.length),
    [shots.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <div className="flex flex-col border-b border-line bg-raise md:border-b-0 md:border-r">
      <div className="group/shot relative flex flex-1 items-center">
        <div className="relative aspect-[2/1] w-full">
          {shots.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={`${title} — ${s.caption}`}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={i === 0}
              className={`object-contain transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${shot.caption} screenshot`}
          className="absolute inset-0 cursor-zoom-in"
        />

        <FiMaximize2
          className="pointer-events-none absolute right-4 top-4 text-sm text-ink opacity-0 transition-opacity group-hover/shot:opacity-80"
          aria-hidden
        />
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mute">
          <span className="text-ink">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          / {count} · {shot.caption}
        </p>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous screenshot"
            className={arrow}
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next screenshot"
            className={arrow}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-line p-3">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.caption} screenshot`}
            aria-current={i === index}
            className={`relative aspect-[2/1] w-16 shrink-0 overflow-hidden rounded-md border transition-all ${
              i === index
                ? "border-accent opacity-100"
                : "border-line opacity-50 hover:opacity-90"
            }`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              sizes="64px"
              className="object-cover object-left-top"
            />
          </button>
        ))}
      </div>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshots`}
            className="fixed inset-0 z-50 flex flex-col bg-base/95 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center justify-between px-5 py-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute">
              <span>
                <span className="text-ink">{title}</span> ·{" "}
                {String(index + 1).padStart(2, "0")} / {count} · {shot.caption}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className={arrow}
              >
                <FiX />
              </button>
            </div>

            <div className="relative flex-1">
              <Image
                src={shot.src}
                alt={`${title} — ${shot.caption}`}
                fill
                sizes="100vw"
                className="object-contain p-4 md:px-20"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous screenshot"
                  className={`pointer-events-auto ${arrow}`}
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next screenshot"
                  className={`pointer-events-auto ${arrow}`}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
