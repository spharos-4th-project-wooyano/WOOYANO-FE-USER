import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import HeaderTop from '@/components/header/headerTop'
import NavBar from '@/components/navBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WooYano',
  description: '우리들의 문제를 야무지게 해결해줄 노련한 전문가를 찾습니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HeaderTop/>
          {children}
          <NavBar/>
        </Providers>
        
      </body>
    </html>
  )
}
