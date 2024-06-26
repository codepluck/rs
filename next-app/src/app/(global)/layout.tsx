import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/scss/app.scss"
import { isLoggedIn } from "@/lib/utils";
import ProtectedLayout from "@/layouts/protected";
import PublicLayout from "@/layouts/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = isLoggedIn()

  return (
    <html lang="en" data-fetching="false">
      <body className={inter.className}>
        {loggedIn ? (
          <ProtectedLayout>
            {children}
          </ProtectedLayout>
        ) : (
          <>
            <PublicLayout>
              {children}
            </PublicLayout>

          </>
        )}
      </body>
    </html>
  );
}
