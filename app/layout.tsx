import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tecosoft Digital Solutions - Digital Transformation Experts",
  description:
    "Transform your business with cutting-edge digital solutions. We help companies modernize operations through innovative technology.",
  keywords:
    "digital transformation, business automation, process optimization, enterprise solutions, technology consulting",
  authors: [{ name: "Tecosoft Digital Solutions" }],
  creator: "Tecosoft Digital Solutions",
  publisher: "Tecosoft Digital Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tecosoft.com",
    title: "Tecosoft Digital Solutions - Digital Transformation Experts",
    description:
      "Transform your business with cutting-edge digital solutions. We help companies modernize operations through innovative technology.",
    siteName: "Tecosoft Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecosoft Digital Solutions - Digital Transformation Experts",
    description:
      "Transform your business with cutting-edge digital solutions. We help companies modernize operations through innovative technology.",
    creator: "@tecosoft",
  },
  generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
