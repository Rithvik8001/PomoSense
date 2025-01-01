"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    try {
      setTheme(theme === "light" ? "dark" : "light");
      setError(null);
    } catch (err) {
      setError("Failed to change theme. Please try again.");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {error && (
        <div className="text-red-500 mb-2 text-xs sm:text-sm">{error}</div>
      )}
      <button
        onClick={handleThemeChange}
        className="text-xl sm:text-2xl theme-transition"
      >
        {theme === "light" ? "◑" : "◐"}
      </button>
    </div>
  );
}
