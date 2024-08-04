import { cn } from "@/lib/utils";
import Link from "next/link";
import NewsletterForm from "./newsletter-form";
import SocialIcons from "./social-icons";
import { Separator } from "@/components/ui/separator";
import { LogInIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
export default function Footer(): JSX.Element {
  return (
    <footer
      className="py-6 md:px-8 md:py-12 sticky bottom-0"
    >
      <div className="container mx-auto">
        <div className="mr-4 hidden md:flex justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LogInIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {/* {footerNav.map((nav) => {
              return (
                <Link
                  href={nav.href}
                  className={cn(
                    "transition-colors text-base text-white hover:text-gray-100 hover:text-foreground/80"
                  )}
                >
                  {nav.title}
                </Link>
              );
            })} */}
          </nav>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full py-12">
          <div className="w-full flex">
            <Separator className="w-full" />
          </div>

          <div className="w-full flex py-8">
            <div className="w-6/12 flex">
              <div className="w-7/12 flex items-center self-center">
                <NewsletterForm />
              </div>
            </div>
            <div className="w-6/12 flex">
              <section className="w-1/2">
                <div className="flex items-center justify-end">
                  <div>
                    <h6 className="text-lg text-white font-medium leading-29px mb-4">
                      Business Hours
                    </h6>
                    <p className="text-sm text-white mb-1">
                      Monday - Saturday (8.00 - 6.00)
                    </p>
                    <p className="text-sm text-white">Sunday - Closed</p>
                  </div>
                </div>
              </section>
              <section className="w-1/2">
                <div className="flex items-center justify-end">
                  <div>
                    <h6 className="text-lg text-white font-medium leading-29px mb-4">
                      Contact Us
                    </h6>
                    <div className="text-sm text-white text-opacity-60 mb-1">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-phone"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-white">+1 234 567 890</span>
                      </div>
                    </div>
                    <div className="text-sm text-white text-opacity-60 my-2">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span className="text-white">+1 234 567 890</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="w-full flex">
            <Separator className="w-full" />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4  md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-white md:text-left">
            Copyright 2024 All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
