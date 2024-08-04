"use client";
import React from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { useAppStore } from "@/store";

const DirectionProvider = ({ children, lang }: { children: React.ReactNode; lang: string }) => {
  const { isRtl } = useAppStore();
  const direction = lang === "ar" || isRtl ? "rtl" : "ltr";
  return (
    <section dir={direction}>
      <RadixDirectionProvider dir={direction}>
        {children}
      </RadixDirectionProvider>
    </section>
  );
};

export default DirectionProvider;
