import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar"
import  Footer  from "@/app/components/Footer"
import { ThemeProvider } from "@/app/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likhni | Your Essential Services Hub",
  description: "Access all essential Indian government and utility services in one place. Likhni - Making digital services simple and accessible.",
  metadataBase: new URL('https://likhni.com'),
  keywords: ["likhni", "essential services", "government services", "utility services", "indian services"],
  authors: [{ name: "Likhni" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://likhni.com",
    title: "Likhni | Your Essential Services Hub",
    description: "Access all essential Indian government and utility services in one place.",
    siteName: "Likhni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background antialiased ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
