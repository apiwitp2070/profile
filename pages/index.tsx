import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookSquare, FaGithub } from 'react-icons/fa'
import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub, AiOutlineFacebook } from 'react-icons/ai';
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script';
import Card from './components/card'
import { profile, homeicon } from '../public/img'
import { projects } from '../public/js/data/projects'

const Home = () => {
  const about = useRef<any>(null);
  const project = useRef<any>(null);
  const [headBg, setheadBg] = useState('hidden')

  const listenScrollEvent = (e: any) => {
    if (window.scrollY < 720) {
      setheadBg('hidden');
    } else {
      setheadBg('block bg-white shadow');
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
      <Script src="/js/wow.min.js"></Script>

      <Head>
        <title>Apiwit | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`z-50 fixed top-0 left-0 right-0 h-16 noselect font-light ${headBg}`}>
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
          <div className='p-4 flex text-black'>
            <h5 className='px-4' onClick={scrollToAbout}>About</h5>
            <h5 className='px-4' onClick={scrollToProject}>Projects</h5>
          </div>
        </div>
        
      </header>

      <div>

        {/*Home screen*/}
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

        {/*Info section*/}
        <div ref={about} className='bg-gray-100 text-black pb-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,32L720,160L1440,32L1440,0L720,0L0,0Z"></path></svg>
          
          <div style={{maxWidth: 1215}} className='grid grid-cols-1 md:grid-cols-2 mx-8 xl:mx-auto'>
            
            <div data-wow-delay='0.5s' className='wow fadeInLeft font-light mb-12 md:mt-20 mb:my-0'>
              <span className='w-fit flex items-center mb-2'>
                <AiOutlinePhone className='w-5 h-5 mr-4' />
                (+66) 91 923 5649</span>
              <span className='w-fit flex items-center mb-2'>
                <AiOutlineMail className='w-5 h-5 mr-4' />
                apiwit2070@gmail.com</span>
              <a href="https://web.facebook.com/apiwit.p" target='_blank' rel='noopener noreferrer' className='w-fit flex items-center transition duration-300 mb-2 hover:text-blue-600'>
                <AiOutlineFacebook className='w-5 h-5 mr-4'/>
                Apiwit Prasittikarnkul</a>
              <a href="https://github.com/laevatein2070" target='_blank' rel='noopener noreferrer' className='w-fit flex items-center transition duration-300 mb-2 hover:text-blue-600'>
                <AiOutlineGithub className='w-5 h-5 mr-4' />
                laevatein2070</a>
            </div>
            <div data-wow-delay='0.2s' className='wow fadeInRight text-justify font-light md:text-lg'>
              <h1 className='mb-8 font-semibold text-3xl md:text-4xl text-gray-800'>About Me</h1>
              <p>
                Hello, My name is Apiwit prasittikarnkul. You can call me Yoseph or Yo.
              </p>
              <p className='mt-4'>
                Graduated from Kasetsart University, with a Bachelor degree in Computer Engineering. I am junior frontend developer who have 
                interest in using and improving my skill to develop a simple yet beautiful website in a various way.
              </p>
              <div className='rounded-md border border-black text-black max-w-fit mt-12'>
              <Link href='/docs/Apiwit.pdf?'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div className='font-normal rounded-md hover:translate-x-3 hover:bg-black hover:text-white duration-300 px-4 py-2'>Download Resume</div>
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f6" fillOpacity="1" d="M0,128L480,160L960,32L1440,96L1440,0L960,0L480,0L0,0Z"></path></svg>
        <div ref={project}></div>

        {/*Projects*/}
        <div style={{maxWidth: 1215}} className='bg-white text-black mx-auto'>
          {projects.map(({isWeb, weburl, name, date, position, image, framework, description}) => (
            <div key={name} className='wow fadeInUp rounded-md border shadow-md mx-4 lg:mx-8 my-20 md:p-4' data-wow-delay="0.4s">
              <Card
                isWeb={isWeb}
                weburl={weburl}
                name={name}
                date={date}
                position={position}
                image={image}
                framework={framework}
                description={description}
              />
            </div>
          ))}
        </div>

      </div>
      {/*End Body*/}

      <footer className='mt-64 bg-black text-white text-center h-16'>

      </footer>

    </div>
  )
}

export default Home
