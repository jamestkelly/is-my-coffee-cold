"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const iconClassName = "h-6 w-6 text-gray-600 group-hover:text-green-900";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-10 p-2 rounded-md hover:bg-gray-100 hover:scale-110 active:scale-100 duration-200 bg-white-primary dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MoonIcon className={iconClassName} aria-hidden={true} />
      ) : (
        <SunIcon className={iconClassName} aria-hidden={true} />
      )}
    </button>
  );
};
