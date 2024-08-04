import { OwnerServiceProvider } from "@/components/providers/owner-service-provider";

export default function Layout({ children }) {
    return (
        <>

            <OwnerServiceProvider>
                <section data-provider={true}>
                    {children}
                </section>
            </OwnerServiceProvider>
        </>
    )
}