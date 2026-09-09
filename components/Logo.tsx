import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
}

export default function Logo({
  size = "md",
  variant = "full",
  className = "",
}: LogoProps) {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-3xl",
  };

  const subTextSizes = {
    sm: "text-[9px]",
    md: "text-[11px]",
    lg: "text-xs",
  };

  const s = iconSizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label="Godfather Funnel AI Home"
    >
      {/* Precision Emblem: Monogram G + Funnel Node */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={s}
          height={s}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Glow Container */}
          <rect
            width="40"
            height="40"
            rx="10"
            className="fill-[#12121a] stroke-white/10 group-hover:stroke-emerald-500/40 transition-colors"
          />

          {/* Premium Geometric Funnel + AI Spark Symbol */}
          {/* Top Funnel Bar */}
          <path
            d="M 9 11 L 31 11 L 24 21 L 16 21 Z"
            fill="url(#logo-grad-top)"
          />
          {/* Stem / Column */}
          <path
            d="M 16 22 L 24 22 L 21 30 L 19 30 Z"
            fill="url(#logo-grad-bot)"
          />
          {/* Precision Center Node */}
          <circle cx="20" cy="16" r="2.5" fill="#FFFFFF" />

          {/* Gradients for high trust & authority */}
          <defs>
            <linearGradient
              id="logo-grad-top"
              x1="9"
              y1="11"
              x2="31"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#10B981" /> {/* Emerald Trust */}
              <stop offset="1" stopColor="#3B82F6" /> {/* Corporate Blue */}
            </linearGradient>
            <linearGradient
              id="logo-grad-bot"
              x1="16"
              y1="22"
              x2="24"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#6366F1" /> {/* Indigo */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant === "full" && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-black tracking-tight text-white font-sans ${textSizes[size]}`}
          >
            GODFATHER
          </span>
          <span
            className={`font-bold tracking-[0.22em] text-emerald-400 uppercase mt-0.5 ${subTextSizes[size]}`}
          >
            FUNNEL AI
          </span>
        </div>
      )}
    </Link>
  );
}
