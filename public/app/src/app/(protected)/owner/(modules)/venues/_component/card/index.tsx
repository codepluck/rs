"use client"
import { useEffect, useState } from "react"
import VenueCard from "../venue-card"
import CardSkeleton from "../skelton/card-skeleton";

export default function VenuesCardComponent({ title, venues }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000)
    }, [])

    if (loading) {
        return (
            <>

                <CardSkeleton limit={5} />
            </>
        )
    }

    return (
        <>
            <div className="p-4">
                <>
                    <section className="w-full relative">

                        <div className="p-5 space-y-5 bg-background rounded-md shadow-sm">

                            <div className="text-base font-medium text-default-900 mb-1 py-2">
                                {title || 'Venues'}
                            </div>

                            {/* user card */}
                            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                                {venues?.map((venue, index) => {
                                    return (
                                        <article key={index}>
                                            <VenueCard venue={venue} />
                                        </article>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                </>

            </div>

        </>

    )
}