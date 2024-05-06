import {Inter} from "next/font/google";
import Header from "@/layouts/global/header";
import Footer from "@/layouts/global/footer";
import "@/assets/scss/app.scss"
import {HomepageMetadata} from "@/config/metadata";
import ThemeProvider from "@/components/providers/theme-provider";
import {TailwindIndicator} from "@/components/tailwind-indicator";

const inter = Inter({subsets: ["latin"]});
export const metadata = HomepageMetadata;

// https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/main/components/icons.tsx

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header/>
            <main className="section">
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        <TailwindIndicator />
        </body>
        </html>
    );
}
