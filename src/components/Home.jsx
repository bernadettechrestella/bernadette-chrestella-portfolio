import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name='home' className='w-full h-screen flex bg-gradient-to-b from-white via-gray-100 to-gray-200
    dark:bg-gradient-to-b dark:from-black dark:via-slate-800 dark:to-gray-700 px-4'>

      <div className='lg:max-w-[1200px] m-auto w-auto'>
        {/* <div className='flex gap-1'> */}
          <p className='md:text-lg text-base text-accent'>Hi, my name is</p>
          {/* <p className='md:text-lg text-base'>my name is</p> */}
        {/* </div> */}
          <div className='flex flex-col lg:flex-row lg:gap-3'>
            <p className='md:text-8xl text-6xl font-bold'>Bernadette</p>
            <p className='md:text-8xl text-6xl font-bold text-accent'>Chrestella.</p>
          </div>
          <p className='text-left pt-4 md:text-7xl text-5xl dark:text-gray-400 text-gray-500'>I'm a Frontend Web Developer</p>
          <p className='text-left pt-2 md:text-6xl text-4xl dark:text-gray-500 text-gray-400'>Bachelor Degree in Informatics</p>

        <div className='py-8'>
          <Link to='project'>
            <button
              className='animate-bounce bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>
                Projects
            </button>
          </Link>
        </div>
      </div>

      <div className='max-w-[1240px] flex flex-col justify-end'>
        {/* <div className='flex flex-col justify-between rounded-xl p-4 shadow-xl'> */}
          <a href="https://www.linkedin.com/in/bernadette-chrestella/" target="_blank" rel="noreferrer">
            <FaLinkedin size='2rem' className='my-2 cursor-pointer hover:text-accent'/>
          </a>
          <a href="https://www.youtube.com/@bernadettechrestella" target="_blank" rel="noreferrer">
            <FaYoutube size='2rem' className='my-2 cursor-pointer hover:text-accent'/>
          </a>
          <a href="https://github.com/bernadettechrestella" target="_blank" rel="noreferrer">
            <FaGithub size='2rem' className='my-2 cursor-pointer hover:text-accent'/>
          </a>
          <a href="https://www.instagram.com/bernadette.chrestella/" target="_blank" rel="noreferrer">
            <FaInstagram size='2rem' className='my-2 cursor-pointer hover:text-accent'/>
          </a>
        {/* </div> */}
      </div>

    </div>
  )
}

export default About