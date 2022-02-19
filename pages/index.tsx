import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookSquare, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Card from './components/card'
import {
  profile,
  tagtrack,
  easygame,
  fynspace,
  homeicon,
  kuacty,
  heatalert,
  osc,
} from '../public'

const Home = () => {
  const about = useRef<any>(null);
  const project = useRef<any>(null);
  const [headBg, setheadBg] = useState('z-50 hidden fixed top-4 left-4 right-4 h-16 noselect font-light')
  const [header, setHeader] = useState('');

  const listenScrollEvent = (e: any) => {
    if (window.scrollY < 720) {
      setHeader('p-4 flex text-black');
      setheadBg('z-50 transition duration-300 hidden fixed top-0 left-0 right-0 h-16 noselect font-light');
    } else {
      setHeader('p-4 flex text-black');
      setheadBg('z-50 transition duration-300 block bg-white shadow fixed top-0 left-0 right-0 h-16 noselect font-light')
    }
  }

  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToAbout = () => about.current.scrollIntoView();
  const scrollToProject = () => project.current.scrollIntoView();

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div>

      <Head>
        <title>Apiwit | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={headBg}>
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
        <div id='menu' className='absolute right-0 hidden sm:text-xl sm:block'>
          <div className={header}>
            <h5 className='px-4' onClick={scrollToAbout}>About</h5>
            <h5 className='px-4' onClick={scrollToProject}>Projects</h5>
          </div>
        </div>
        
      </header>

      <div>

        <div id='introduction' className='bg-black text-white h-screen flex justify-center relative noselect'>

          <div className='z-0 w-full pt-8 sm:mx-4 md:mx-32 flex flex-col justify-center'>
            <div className='flex flex-col md:flex-row-reverse justify-center'>
              <div id='pfp' className='w-1/2 max-w-2xs lg:max-w-xs place-self-center md:ml-12 lg:ml-16 xl:ml-32'>
                <Image 
                  priority={true}
                  src={profile} 
                  alt='profile'
                  id='pic'
                  className='w-full h-auto rounded-full'/>
              </div>
              <div id='name' className='py-8 place-self-center'>
                <h1 className='text-4vw md:text-3vw xl:text-2.5vw'>Hi, I am</h1>
                <h1 className='text-5.5vw sm:text-5vw md:text-4.5vw xl:text-4vw font-bold'>Apiwit Prasittikarnkul</h1>
                <h1 className='text-4vw sm:text-3.5vw md:text-3vw lg:text-2.5vw font-light'>| Frontend Developer</h1>
                <div className='flex mt-4 md:mt-8'>
                <a href="https://web.facebook.com/apiwit.p" target='_blank' rel='noopener noreferrer'>
                  <FaFacebookSquare className='text-4.5vw md:text-4xl transition delay-150 duration-300 hover:text-blue-500 hover:scale-110'/>
                </a>
                <a href="https://github.com/laevatein2070" target='_blank' rel='noopener noreferrer'>
                  <FaGithub className='text-4.5vw md:text-4xl ml-4 transition delay-150 duration-300 hover:scale-110'/>
                </a>
                </div>
              </div>
            </div>
            <div id='aboutme' className='flex absolute bottom-8 md:bottom-12 place-self-center'>
              <h5 onClick={scrollToAbout} className='text-white hover:text-orange-300 uppercase mr-4 transition duration-300'>About Me</h5>
              <h5 className='px-2 noselect'>|</h5>
              <h5 onClick={scrollToProject} className='ml-4 hover:text-orange-300 uppercase transition duration-300'>Projects</h5>
            </div>   
          </div>

        </div>

        <div ref={about} className='bg-gray-100 text-black pb-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,32L720,160L1440,32L1440,0L720,0L0,0Z"></path></svg>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-16'>
            <div>
              
            </div>
            <div className='text-justify font-light md:text-lg'>
              <h1 className='mb-8 font-semibold text-3xl md:text-4xl text-gray-800'>About Me</h1>
              <p>Hello, My name is Apiwit prasittikarnkul. You can call me Yoseph or Yo.</p>
              <p>
                Graduated from Kasetsart University in major of Computer Engineering, I am Junior frontend developer who have 
                interest in using and improving my skill to develop an eye-pleasing website in a various way.
              </p>
              <div className='rounded-md border border-black text-black max-w-fit mt-8'>
                <div className='font-normal rounded-md hover:translate-x-3 hover:bg-black hover:text-white duration-300 px-4 py-2'>Download Resume</div>
              </div>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f6" fillOpacity="1" d="M0,128L480,160L960,32L1440,96L1440,0L960,0L480,0L0,0Z"></path></svg>

        <div style={{maxWidth: 1215}} className='bg-white text-black mx-auto'>
          <div ref={project}></div>
          <Card
            isInfo={false}
            weburl=""
            name='Tagtrack'
            position='grid md:grid-cols-2 gap-8'
            image={tagtrack}
            framework='HTML | JavaScript | Python'
            description="An IoT device that can detect user heart rate. When heart rate exceed a 
            certain point, it will sent out an alarm which can be heared by other people. 
            Design for phobia's patient that might encounter their cause unexpectly."
          />
          <Card
            isInfo={true}
            weburl="https://cpe-easygame.firebaseapp.com"
            name='EasyGame'
            position='flex flex-col md:flex-row-reverse gap-8'
            image={easygame}
            framework='Python | Construct 3 | Firebase'
            description="A simple 2-players local shooting game that can be play with a keyboard or 
            a single button on an IoT board. The gaming part has been developed with construct 3 engine
            and hosted with Google Firebase."
          />
          <Card
            isInfo={false}
            weburl=""
            name='KU-ACTY'
            position='grid md:grid-cols-2 gap-8'
            image={kuacty}
            framework='React | Material UI'
            description="A website about club and activities in Kasetsart University.
            You can check your past activities that you attend. Total activity hours.
            And see how much hours or activity you need to complete. You can also view
            details such as time or place that that activity take place."
          />
          <Card
            isInfo={false}
            weburl=""
            name='Heat Alert'
            position='flex flex-col md:flex-row-reverse gap-8'
            image={heatalert}
            framework='Python'
            description="An IoT with a use of PIR censor and heat detector, When a temperature in 
            the room exceed some point, It will sent an alarm to the room that have people."
          />
          <Card
            isInfo={true}
            weburl="https://fynspace.com"
            name='Fynspace'
            position='grid md:grid-cols-2 gap-8'
            image={fynspace}
            framework='Next.js | Strapi | Tailwind CSS'
            description="An art lover community. You can explore a variety of arts inside Fynspace. 
            Everyone is welcomed. No matter that you are an artist, or just only people who took 
            interest in art. You can upload or take place in a bid for an art you want!
            This website is a part of my full-stack development at internship during May and June 2021."
          />
          <Card
            isInfo={true}
            weburl="https://laevatein2070-osc.vercel.app/online-simple-circuit"
            name='Online Simple Circuit'
            position='flex flex-col md:flex-row-reverse gap-8'
            image={osc}
            framework='React | GoJS | Tailwind CSS'
            description="An online circuit diagram maker develop using React and GoJS with a purpose
            of learning tool in the pandemic state. The purpose of the project is to make user experience
            as close as possible to an actual circuit connection in the classroom With more realistic IC 
            component."
          />
        </div>

      </div>
      {/*End Body*/}

      <footer className='mt-64 bg-black text-white text-center h-16'>

      </footer>

    </div>
  )
}

export default Home
