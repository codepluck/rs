import Image from "next/image";
import ComponentBanner from "@/components/public/section/component-banner";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <section className={"h-[80vh] w-full"}>
                <ComponentBanner/>
            </section>

        </main>
    );
}
