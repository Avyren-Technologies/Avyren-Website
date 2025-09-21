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
  title: "Avyren Technologies - Powering Smart Digital Solutions",
  description:
    "Affordable, scalable, and intelligent digital platforms for modern businesses. From workforce management to e-commerce solutions.",
  keywords:
    "workforce management software, HRMS attendance app, e-commerce platform, service booking platform, affordable software solutions India, digital transformation",
  authors: [{ name: "Avyren Technologies" }],
  creator: "Avyren Technologies",
  publisher: "Avyren Technologies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avyrentechnologies.com",
    title: "Avyren Technologies - Powering Smart Digital Solutions",
    description:
      "Affordable, scalable, and intelligent digital platforms for modern businesses. From workforce management to e-commerce solutions.",
    siteName: "Avyren Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyren Technologies - Powering Smart Digital Solutions",
    description:
      "Affordable, scalable, and intelligent digital platforms for modern businesses. From workforce management to e-commerce solutions.",
    creator: "@avyrentech",
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
