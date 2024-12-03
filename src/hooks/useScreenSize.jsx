import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | ""
  >("");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) setScreenSize("xs");
      else if (width >= 640 && width < 768) setScreenSize("sm");
      else if (width >= 768 && width < 1024) setScreenSize("md");
      else if (width >= 1024 && width < 1280) setScreenSize("lg");
      else if (width >= 1280 && width < 1536) setScreenSize("xl");
      else if (width >= 1536) setScreenSize("2xl");
      else setScreenSize("");
    };

    updateScreenSize(); // Set initial screen size
    window.addEventListener("resize", updateScreenSize); // Listen for resize events

    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

  return screenSize;
};
