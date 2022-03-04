import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {
  homeicon,
  tagtrack,
} from '../../public'

const TagTrack = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div>

      <Head>
        <title>Projects | TagTrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={'z-50 bg-white shadow fixed top-0 left-0 right-0 h-16 noselect font-light'}>
        <div className='absolute mx-8 my-4'>
          <Image 
            priority={true}
            src={homeicon} 
            alt='homeicon'
            width={36}
            height={36}
            className='lg:hover:rotate-180 transition delay-50 duration-500'
            onClick={scrollToTop}
          />
        </div>
        <div id='menu' className='absolute right-0 text-xl'>
          <div className={'p-4 flex text-black'}>
            <Link href="/"><h5 className='px-4'>Home</h5></Link>
          </div>
        </div>
        
      </header>

      <div className="xl:mx-8 -z-10 fixed top-0 left-0 right-0">
        <Image src={tagtrack} alt="tagtrack" />
      </div>

      <div className='z-40 xl:mx-8 pt-32'>
        <h1 className='bg-white h-24 py-6 text-center font-bold text-4xl mx-auto mb-16'>TagTrack</h1>
        
        <div className='bg-white text-black mx-auto mt-32 xl:mt-96'>
          <p style={{maxWidth: 1215}} className='pt-16 mx-4 lg:mx-16 xl:mx-auto text-justify'>
            TagTrack is an IoT project develop during eXceed camp, a bootstrap coding
            camp for Kasetsart University CPE students. In a final day of the camp, 
            A project topic will be announced and students need to develop a hardware
            or a software to sastify the condition or purpose of those topic. We received
            a topic about an IoT device to help in medical treatment.
          </p>
          <p style={{maxWidth: 1215}} className='pt-8 mx-4 lg:mx-16 xl:mx-auto text-justify'>
            We, as Jitrada Group, came up with an idea about phobia. There are a lot
            of phobia and the clause can be found anywhere. The patient might encounter
            the clause of their phobia unexpectly, such as seeing a spider picture popup
            immediately while exploring facebook feed, and their symtom may occur.
          </p>
          <p style={{maxWidth: 1215}} className='pt-8 mx-4 lg:mx-16 xl:mx-auto text-justify'>
            The patient might be in a state where they cannot communicate such as
            asking for help or do a symboltic activity such as waving their hands due to
            their temporary panic state. And their hardrate will increase by a large amount.
          </p>
          <p style={{maxWidth: 1215}} className='pt-8 mx-4 lg:mx-16 xl:mx-auto text-justify'>
            And that is why we came out with an idea of this IoT device. A wristbrand-like
            device that can detect the user real-time heartrate and can send a high volume 
            alarm to surrounding when heartrate exceed a certain threshold. Expecting people 
            to hear and come for help. There are also a website that can keep track of user
            statistic about various details.
          </p>
          <p style={{maxWidth: 1215}} className='pt-8 mx-4 lg:mx-16 xl:mx-auto text-justify'>
            The hardware were coded with micropython and the website were develop with html
            and css. GitHub link of the project can be found below.
          </p>
          <a
            href='https://github.com/plumest/TagTrack' target="_blank" rel="noopener noreferrer">
            <p style={{maxWidth: 1215}} className='py-8 mx-4 lg:mx-16 xl:mx-auto text-justify font-bold'>
              GitHub
            </p>
          </a>
        </div>
      </div>
      {/*End Body*/}

      <footer className='bg-black text-white text-center h-16'>

      </footer>

    </div>
  )
}

export default TagTrack;