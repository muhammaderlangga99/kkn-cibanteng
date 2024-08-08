import DataRumah from '@/components/atom/home/data/dataRumah'
import dataRumah from '@/components/atom/home/data/dataRumah'
import React from 'react'
import { Hero } from '@/components/atom/home/header'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <DataRumah />
    </div>
  );
}
