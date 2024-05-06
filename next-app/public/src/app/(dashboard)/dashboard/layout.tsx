import {Inter} from "next/font/google";
import Header from "@/layouts/dashboard/header";
import Sidebar from "@/layouts/dashboard/sidebar";
import {Toaster} from "@/components/ui/toaster";
import Providers from "@/components/providers";
import {getServerSession} from "next-auth";
import {HomepageMetadata} from "@/config/metadata";
import "@/assets/scss/app.scss"
import SessionProvider from "@/components/providers/session-provider";


const inter = Inter({subsets: ["latin"]});
export const metadata = HomepageMetadata;

export default async function DashboardLayout({
                                                  children,
                                              }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} overflow-hidden font-roboto`}>
            <SessionProvider>

                <Header/>
                <div className="flex h-screen overflow-hidden">
                    <Sidebar/>
                    <main className="w-full pt-16">{
                        children}
                    </main>
                </div>
            </SessionProvider>
            <Toaster/>
            </body>
            </html>
        </>
    );
}
