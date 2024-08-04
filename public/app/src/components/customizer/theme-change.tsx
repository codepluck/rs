import { cn } from "@/lib/utils";
import React from "react";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAppStore } from "@/store";
import { themes } from "@/config/theme";

const ThemeChange = () => {
  const { theme, setTheme } = useAppStore();
  const { resolvedTheme: mode } = useTheme();

  // Find the current theme object only once
  const currentTheme = themes.find((t) => t.name === theme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  const themeList = [
    "zinc", "slate", "stone", "gray", "neutral", "red", "rose", "orange",
    "blue", "yellow", "violet"
  ];

  return (
    <div
      style={{
        "--theme-primary": `hsl(${currentTheme?.cssVars[mode]?.primary})`,
      } as React.CSSProperties}
    >
      <div className="text-muted-foreground font-normal text-xs mb-4">
        Change Theme
      </div>
      <div className="flex flex-wrap">
        {themeList.map((value) => {
          const themeObj = themes.find((theme) => theme.name === value);
          const isActive = theme === value;
          return (
            <TooltipProvider key={value}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label>
                    <input
                      type="radio"
                      className="hidden"
                      value={value}
                      checked={isActive}
                      onChange={handleThemeChange}
                    />
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                        isActive ? "border-[--theme-primary]" : "border-transparent"
                      )}
                      style={{
                        "--theme-primary": `hsl(${themeObj?.activeColor[mode]})`,
                      } as React.CSSProperties}
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]">
                        {isActive && <Check className="h-4 w-4 text-primary-foreground" />}
                      </div>
                    </div>
                  </label>
                </TooltipTrigger>
                <TooltipContent align="center" className="rounded-[0.5rem] bg-zinc-900 text-zinc-50 capitalize">
                  {value}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeChange;
