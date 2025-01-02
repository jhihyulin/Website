"use client";

import { ThemeSwitcher } from "./theme-switcher";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center">
      <ThemeSwitcher />
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} saget.me
      </p>
    </footer>
  );
}

export { Footer };
