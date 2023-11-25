import Providers from '@/components/providers';
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Mulish } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-open-sans",
});

const mulish = Mulish({
  subsets: ['latin'],
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: false,
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${mulish.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
