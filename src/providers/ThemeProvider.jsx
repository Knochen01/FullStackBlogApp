"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};
