"use client";

import { useEffect, useState } from "react";
import { Classic } from "@/components/ui/classic";
import "@theme-toggles/react/styles/classic.css";

const STORAGE_KEY = "rana-theme";

export function ThemeToggle() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const stored = readStoredTheme();
    const next = stored ?? "light";
    setToggled(next === "dark");
    applyTheme(next);
  }, []);

  const onClick = () => {
    setToggled((value) => {
      const next = !value;
      applyTheme(next ? "dark" : "light");
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {
        // storage unavailable; theme still applies for this session
      }
      return next;
    });
  };

  return (
    <Classic
      toggled={toggled}
      onClick={onClick}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="st-classic-toggle"
    />
  );
}

type Theme = "light" | "dark";

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#121211" : "#f4f4f2");
  }
}
