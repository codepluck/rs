import {appConfig} from "@/config/app";

export default function Footer(): JSX.Element {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
            </div>
        </footer>
    )
}
