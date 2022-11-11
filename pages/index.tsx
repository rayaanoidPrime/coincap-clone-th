import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <Header />
      </div>
      <div className='mt-10'>
        {/* Trending */}
      </div>
      <div className='mt-10'>
        {/* GRaphs from CMC api*/}
      </div>
    </div>)
}

export default Home
