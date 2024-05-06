import Image from "next/image"

import img from './../../../../public/images/main-banner.jpg'
import {EventSearch} from "@/app/(global)/event-search";

const componentStyle = {
    backgroundImage: `url('${img?.src}')`,
}
export default function ComponentBanner() {
    return (
        <section className={"section-hero w-full"}>
            <section
                style={componentStyle}
                className={`relative bg-cover bg-center bg-no-repeat`}
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 items-center justify-center"
                >
                    <div className="max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                            Find Something Great To Do
                        </h1>
                        <article className="w-full my-4">
                            <EventSearch/>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    )
}
