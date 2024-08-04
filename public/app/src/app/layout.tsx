import "@/assets/scss/themes/app-theme.scss";
import "@/assets/css/globals.css";

import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
// import "simplebar-react/dist/simplebar.min.css";

// import TanstackProvider from "@/provider/providers.client";
// import AuthProvider from "@/provider/auth.provider";
// import "flatpickr/dist/themes/light.css";
import AppProviders from "@/components/providers/app-providers";
import DirectionProvider from "@/components/providers/direction.provider";
import AuthProvider from "@/components/providers/auth-provider";
// import DirectionProvider from "@/provider/direction.provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    // <html lang={lang}>
    <html lang="en" suppressHydrationWarning={true}>
      <AuthProvider>
        {/* <TanstackProvider> */}
        <AppProviders>
          <DirectionProvider lang={lang}>{children}</DirectionProvider>
        </AppProviders>
        {/* </TanstackProvider> */}
      </AuthProvider>
    </html>
  );
}
