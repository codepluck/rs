import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";
import { useContext } from "react";

export default function SiteHeader() {
  const session = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            {session ? (
              <>
                logged
              </>
            ) : (
              <>
                <section className="flex items-center justify-between space-x-3 mr-2">
                  <Link
                    rel="noreferrer"
                    href="/auth/register"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Register
                  </Link>
                  <Link href={"/auth/login"} className={cn(buttonVariants())}>
                    Login
                  </Link>
                </section>
              </>
            )}
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
