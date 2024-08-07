import type { Metadata } from "next";
import LayoutProtected from "@/layout/protected/layout";
import AuthProvider from "@/components/providers/auth-provider";
import ProtectedLayoutProvider from "@/layout/protected/layout";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const { theme, radius } = useThemeStore();
    return (

        <>
            <ProtectedLayoutProvider trans={null}>
                <section className="layout-protected min-h-screen">
                    {children}
                </section>
            </ProtectedLayoutProvider>
        </>

    );
}
