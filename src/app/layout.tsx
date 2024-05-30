import type { Metadata } from 'next'
import "./globals.css"

import Favicon from './logo.png'
import { AppContextProvider } from "@/context/Provider";

export const metadata: Metadata = {
  title: "Miguel's portfolio",
  description: "portfolio web with javascript/typescript projects",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
