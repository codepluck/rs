"use client"
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function Dashboard() {
    const {data: session} = useSession();
    if (!session) {
        redirect('/auth/login')
    }
    return (
        <section className="section">
            From Dashboard
        </section>
    )
}
