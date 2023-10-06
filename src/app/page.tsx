import ResponsiveAppBar from '@/components/molecules/Header'
import { Container } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <ResponsiveAppBar />
    </main>
  )
}
