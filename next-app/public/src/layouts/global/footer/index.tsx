import {appConfig} from "@/config/app";
import Icons from "@/components/icons";
import Link from "next/link";

export default function Footer(): JSX.Element {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container py-8">
                <section className="flex flex-col items-baseline justify-between gap-4 md:h-24 md:flex-row">
                    <article className="flex gap-4">
                        <section className="w-full leading-loose text-muted-foreground">
                            <p className="">
                                <strong className={"flex items-center space-x-2"}>
                                <span className="icon">
                                    <Icons.phone/>
                                </span>
                                    <span>
                                     Phone Number
                                </span>
                                </strong>
                            </p>
                            <p>
                                <Link href={"callto:+91 1234567890"}
                                      className="hover:underline transition-all duration-75">
                                <span className="icon hover:underline">
                                    +91 1234567890
                                </span>
                                </Link>
                            </p>
                        </section>
                    </article>
                    <article className="flex gap-4">
                        <section className="w-full leading-loose text-muted-foreground">
                            <p className="">
                                <strong className={"flex items-center space-x-2"}>
                                <span className="icon">
                                    <Icons.map/>
                                </span>
                                    <span>
                                     Get Directions
                                </span>
                                </strong>
                            </p>
                            <p>
                                Queens Park Avenue, Stock,<br/>
                                Near Billericay, Essex, CMP 12 OSP
                            </p>
                        </section>
                    </article>
                    <article className="flex gap-4">
                        <section className="w-full leading-loose text-muted-foreground">
                            <p className="">
                                <strong className={"flex items-center space-x-2"}>
                                <span className="icon">
                                    <Icons.email/>
                                </span>
                                    <span>
                                     Email Address
                                </span>
                                </strong>
                            </p>
                            <p>
                                <Link href={"mailto:stock-events@gmail.com"}
                                      className="hover:underline transition-all duration-75">
                                <span className="icon hover:underline">
                                    stock-events@gmail.com
                                </span>
                                </Link>
                            </p>
                        </section>
                    </article>
                </section>

                <section className="flex justify-center pt-8 w-full">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2024 &nbsp;
                        <a
                            href={appConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Eventwizz.
                        </a>
                        &nbsp; Inc. All Rights Reserved.
                    </p>
                </section>
            </div>
        </footer>
    )
}
