import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundEffects } from "@/components/background-effects";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whizydan's Portfolio | Web & Mobile Developer",
  description:
      "Whizydan's, a software developer skilled in Next.js, React, ASP.NET, Kotlin, Flutter & Arduino. Showcasing projects, skills, and experience.",
  keywords: [
    "Whizydan",
    "Software Developer",
    "Next.js",
    "React",
    "Flutter",
    "Kotlin",
    "Arduino",
    "Web Developer",
    "Mobile Developer",
    "Software Developer Kenya"
  ],
  authors: [{ name: "Whizydan" }],
  creator: "Whizydan",
  publisher: "Whizydan",
  metadataBase: new URL("https://whizydan.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Whizydan's Portfolio | Web & Mobile Developer",
    description:
        "Whizydan's, a software developer skilled in Next.js, React, ASP.NET, Kotlin, Flutter & Arduino. Showcasing projects, skills, and experience.",
    url: "https://whizydan.vercel.app",
    siteName: "Whizydan's Portfolio | Web & Mobile Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Whizydan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  applicationName: "Whizydan's Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          {/* Background Effects */}
          <BackgroundEffects />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="flex-1 relative z-10">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster />
      </ThemeProvider>

      {/* Vercel Analytics */}
      <Analytics />
      <SpeedInsights />
      </body>
      </html>
  );
}