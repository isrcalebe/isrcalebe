import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { AsyncHeader } from '@/components/header/preset-async'
import { Footer } from '@/components/footer'
import '@/globals.css'

const monaspaceKrypton = localFont({
  variable: '--font-monaspace-krypton',
  src: './fonts/MonaspaceKryptonVarVF.woff2',
})

const monaspaceNeon = localFont({
  variable: '--font-monaspace-neon',
  src: './fonts/MonaspaceNeonVarVF.woff2',
})

const monaspaceRadon = localFont({
  variable: '--font-monaspace-radon',
  src: './fonts/MonaspaceRadonVarVF.woff2',
})

export const metadata: Metadata = {
  title: '@isrcalebe — Israel Calebe',
  description: '@isrcalebe — Israel Calebe',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaspaceKrypton.variable} ${monaspaceNeon.variable} ${monaspaceRadon.variable} antialiased min-h-screen text-[0.9rem]`}
      >
        <div className="flex flex-col min-h-screen">
          <AsyncHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
