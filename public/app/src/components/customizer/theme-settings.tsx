"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeChange from "./theme-change";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings } from "lucide-react";
// import { useRtl } from "@/hooks/useRtl"; // Assuming you have a custom hook to handle RTL logic

interface ThemSettingsProps {
  trigger?: React.ReactNode;
}

const ThemSettings: React.FC<ThemSettingsProps> = ({
  trigger = (
    <div className="fixed bottom-14 z-50 ltr:right-4 rtl:left-4">
      <Button size="icon" className="relative h-12 w-12 rounded-full">
        <Settings className="h-7 w-7 animate-spin" />
      </Button>
    </div>
  ),
}) => {
  const isRtl = false

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={isRtl ? "left" : "right"}
        overlayClass="bg-transparent backdrop-blur-none"
        className="lg:w-3/4 w-full max-w-full md:max-w-sm px-6 pt-0 pb-6"
      >
        <SheetHeader className="text-start border-b -mx-6 px-6 py-4 shadow-sm md:shadow-none">
          <SheetTitle className="text-base font-medium">
            Theme Settings
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-120px)] -mx-6 px-6">
          <div className="space-y-8 mt-3">
            <ThemeChange />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default ThemSettings;
