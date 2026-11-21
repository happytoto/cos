"use client";

import { useState } from "react";

const SOURCE = "https://cos.aplusnet.net";

const NAV_ITEMS = [
  { href: `${SOURCE}/#why`, label: "멤버십" },
  { href: `${SOURCE}/videos`, label: "추천영상" },
  { href: `${SOURCE}/tools`, label: "AI도구" },
  { href: `${SOURCE}/kits`, label: "실전키트" },
  { href: "https://blog.greenkokki.com", label: "블로그" },
] as const;

export type NavLabel = (typeof NAV_ITEMS)[number]["label"];

export function SiteHeader({ active }: { active?: NavLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="gk-header">
      <nav className="gk-nav">
        <a href={SOURCE} className="gk-brand">
          <span className="gk-logo">
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG mark */}
            <img src="/sites/rocketsecu/logo.svg" alt="로켓시큐 로고" />
          </span>
          <span className="gk-brand-name">
            RocketSecu <small>로켓시큐</small>
          </span>
        </a>
        <button
          type="button"
          className="gk-nav-toggle"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div className={`gk-nav-links${open ? " is-open" : ""}`} onClick={() => setOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.label === active ? "page" : undefined}
              className={item.label === active ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
