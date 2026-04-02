import type { Metadata } from "next"
import { Noto_Serif, Manrope } from "next/font/google"
import "./globals.css"
import { ScrollProgressBar } from "@/components/ui/effects/scroll-progress-bar"
import SiteShell from "@/components/SiteShell"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Saffron Palace | Premium Indian Restaurant in Austin",
  description:
    "Saffron Palace is a premium Indian restaurant inspired by Rajasthan—tandoori, biryani, velvet curries, and chef-led thalis in a cinematic, warm dark setting.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSerif.variable} ${manrope.variable} bg-background text-foreground antialiased`}
      >
        <ScrollProgressBar />
        <SiteShell>
          <Navbar />
          {children}
          <Footer />
        </SiteShell>
      </body>
    </html>
  )
}
