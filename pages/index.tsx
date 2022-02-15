import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const Home = () => {
  const [header, setHeader] = useState('fixed top-0 left-0 right-0 bg-white h-16 font-light text-3xl text-black p-4 noselect transition duration-150');

  const listenScrollEvent = (e: any) => {
    if (window.scrollY < 360) {
      setHeader('fixed top-0 left-0 right-0 bg-white h-16 font-light text-3xl text-black p-4 noselect transition duration-150');
    } else if (window.scrollY < 760) {
      setHeader('fixed top-0 left-0 right-0 bg-black h-16 font-light text-3xl text-white p-4 noselect transition duration-150');
    }  else {
      setHeader('fixed top-0 left-0 right-0 bg-white h-16 font-light text-3xl text-black p-4 noselect transition duration-150');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div>

      <Head>
        <title>Yomiya Little Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={header}>
        Home
      </header>

      <body>
        <div className='bg-white text-black h-96 mt-16'>
        </div>
        <div className='bg-black text-white h-96'>
        </div>
        <div className='bg-white text-black h-96'>
        </div>
        <div className='bg-black text-white h-96'>
        </div>
      </body>

    </div>
  )
}

export default Home
