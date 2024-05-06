"use client"

import * as React from "react"
import Link, {LinkProps} from "next/link"
import {usePathname, useRouter} from "next/navigation"
import {ViewVerticalIcon} from "@radix-ui/react-icons"

import Icons from "@/components/icons"
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {appConfig, mainNav, sidebarNav} from "@/config/app";

import {ScrollArea} from '@/components/ui/scroll-area';
import {ThemeToggle} from "@/components/public/header/theme-toggle";
import MobileLink from "@/components/public/header/mobile-nav/mobile-link";

export function MobileNav() {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname();
    const buttonClass = "flex space-x-2 w-full items-center";
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <Icons.logo className="mr-2 h-4 w-4"/>
                    <span className="font-bold">{appConfig.name}</span>
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 px-3">
                    <div className="flex flex-col space-y-3">
                        {mainNav?.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                    >
                                        {item.title}
                                    </MobileLink>
                                )
                        )}

                        <nav className="flex items-start flex-col gap-2">
                            {(pathname === "/auth/login") ? (
                                <MobileLink
                                    key={'/auth/register'}
                                    href={'/auth/register'}
                                    onOpenChange={setOpen}
                                    className={buttonClass}
                                >
                                    <span className="login">
                                        <Icons.login/>
                                    </span>
                                    <span>Register</span>
                                </MobileLink>
                            ) : (

                                <MobileLink
                                    key={'/auth/login'}
                                    href={'/auth/login'}
                                    onOpenChange={setOpen}
                                    className={buttonClass}
                                >
                                    <span className="login">
                                        <Icons.login/>
                                    </span>
                                    <span>Login</span>
                                </MobileLink>
                            )}
                            <ThemeToggle/>
                        </nav>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
