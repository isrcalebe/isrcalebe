import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const monaspaceKrypton = localFont({
  src: '../../public/fonts/MonaspaceKryptonVar.ttf',
  variable: '--font-krypton'
})

const monaspaceRadon = localFont({
  src: '../../public/fonts/MonaspaceRadonVar.ttf',
  variable: '--font-radon'
})

export const metadata: Metadata = {
  title: '@isrcalebe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${monaspaceKrypton.variable} ${monaspaceRadon.variable} min-h-screen text-[0.9rem] antialiased`}>{children}</body>
    </html>
  )
}
