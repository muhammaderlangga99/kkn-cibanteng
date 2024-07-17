import DataRumah from '@/components/atom/home/data/dataRumah'
import dataRumah from '@/components/atom/home/data/dataRumah'
import { Header } from '@/components/atom/home/header'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-black'>
      <Header />
      <DataRumah />
    </div>
  )
}
