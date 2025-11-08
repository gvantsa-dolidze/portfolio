"use client";
import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const LanguageToggle = ({ className }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ka" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 px-2 py-1 text-sm font-medium",
        "bg-transparent text-foreground/80 hover:text-primary transition-colors duration-200",
        "rounded-md cursor-pointer",
        className
      )}
    >
      <Globe size={16} />
      {language === "en" ? "EN" : "GE"}
    </button>
  );
};
