"use client"
import ServiceVenues from "@/services/api/venues";
import { useEffect, useState } from "react"

export default function Page() {
    const [venues, setVenues] = useState([]);
    useEffect(() => {

        const fetchAndSetVenues = async () => {
            const fetchVenues = await ServiceVenues.getVenues();
            setVenues(fetchVenues);
        }
        //fetch the venues
        fetchAndSetVenues();
    }, []);
    return (
        <>
            <section className="w-full">



            </section>

        </>
    )
}