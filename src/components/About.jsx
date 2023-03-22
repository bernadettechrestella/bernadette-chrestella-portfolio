import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b to-white via-gray-100 from-gray-200
      dark:bg-gradient-to-b dark:to-black dark:via-slate-800 dark:from-gray-700'>
      <div className='flex flex-col justify-center items-center py-24'>
        <div className='max-w-[1000px] w-full'>
          <div className='text-center px-4 pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-accent'>
              About Me.
            </p>
          </div>
        </div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Stella, nice to meet you. Please take a look around!</p>
            </div>
            <div>
              <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>  
              <br />
              <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
            <div className='py-4'>
              <Link to='contact'>
                <button
                  className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>
                    Contact
                </button>
              </Link>
            </div>
            </div>
          </div>

            <div className='max-w-[1000px] w-full md:pt-16 pt-2'>
              <div className='text-center md:pb-8 pb-4 px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-accent'>
                  My Skills.
                </p>
              </div>
            </div>
            
            <div className='pt-2 px-2 w-full max-w-[1000px]'>
              <ul className='grid grid-cols-3 sm:grid-cols-5 text-center'>
                <li className='p-3 rounded-xl border border-accent m-2'>HTML</li>
                <li className='p-3 rounded-xl border border-accent m-2'>CSS</li>
                <li className='p-3 rounded-xl border border-accent m-2'>Java Script</li>
                <li className='p-3 rounded-xl border border-accent m-2'>Bootstrap</li>
                <li className='p-3 rounded-xl border border-accent m-2'>Tailwind Css</li>
                <li className='p-3 rounded-xl border border-accent m-2'>React.js</li>
                <li className='p-3 rounded-xl border border-accent m-2'>Vue.js</li>
                <li className='p-3 rounded-xl border border-accent m-2'>MySql</li>
                <li className='p-3 rounded-xl border border-accent m-2'>Firebase</li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default About