"use client"

import Image from "next/image";

export default function Home() {

  return (
    <section className="w-full relative" data-link={"layout-global-protected-page"}>
      <section className="container">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Home</h1>
          <p className="mt-4">
            This is the main content area where your page content goes.
          </p>
        </div>
      </section>
    </section>
  );
}
