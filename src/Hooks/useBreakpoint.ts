"use client";

import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);
    updateWidth(); 
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};

export default useBreakpoint;
