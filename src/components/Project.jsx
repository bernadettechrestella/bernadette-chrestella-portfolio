import React from 'react'
import cerdasia from '../assets/cerdasia.png';
import portfolio from '../assets/portfolio.png';
import bmiCalc from '../assets/bmiCalc.png';
import crypto from '../assets/crypto.png';

const Project = () => {
  return (
    <div name='project' className='w-full bg-gradient-to-b from-white via-gray-100 to-gray-200
      dark:bg-gradient-to-b dark:from-black dark:via-slate-800 dark:to-gray-700'>
      <div className='flex flex-col justify-center items-center pt-24 pb-12'>
        
        <div className='max-w-[1000px] w-full'>
          <div className='text-center pb-3 px-4'>
            <p className='text-4xl font-bold inline border-b-4 border-accent'>
              Projects.
            </p>
            <p className='pt-3 pb-2'>Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
          </div>
        </div>

        <div className='max-w-[1100px] w-full grid sm:grid-cols-2 gap-6 px-4'>
          
          <div className='bg-button rounded-xl shadow-lg shadow-cyan-500/50  hover:scale-105 ease-in-out'>
            <div className='h-full w-full border-accent border-4 rounded-xl bg-button '>
              <img src={portfolio} alt='/' className='h-full w-full rounded-lg' />
            </div>
          </div>
          <div className='md:py-4 sm:py-2 px-1'>
            <p className='font-semibold text-2xl tracking-widest'>My Portfolio</p>
            <p className='pt-2 pb-4'>My own portfolio website, design and made by Me.</p>
            <p className='font-semibold text-lg'>Tools Used</p>
            <ul className='flex flex-wrap pb-3'>
                <li className='p-1.5 rounded-xl border border-accent m-1'>HTML</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>CSS</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Java Script</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Tailwind Css</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>React Js</li>
              </ul>
            <div className='flex gap-3'>
              <a href="https://bernadette-chrestella-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Demo</button>
              </a>
              <a href="https://github.com/bernadettechrestella/bernadette-chrestella-portfolio" target="_blank" rel="noreferrer">
                <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Code</button>
              </a>
            </div>
          </div>

          <div className='bg-button rounded-xl shadow-lg shadow-cyan-500/50  hover:scale-105 ease-in-out'>
            <div className='h-full w-full border-accent border-4 rounded-xl bg-button '>
              <img src={cerdasia} alt='/' className='h-full w-full rounded-lg' />
            </div>
          </div>
          <div className='md:py-4 sm:py-2 px-1'>
            <p className='font-semibold text-2xl tracking-widest'>Cerdasia</p>
            <p className='pt-2 pb-4'>Landing Pages for Cerdasia Mobile Application. Contains Vision Mision, Fiturs, Pricing, and Contact for collaborate.</p>
            <p className='font-semibold text-lg'>Tools Used</p>
            <ul className='flex flex-wrap pb-3'>
                <li className='p-1.5 rounded-xl border border-accent m-1'>HTML</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>CSS</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Java Script</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Vue Js</li>
              </ul>
            <div className='flex gap-3'>
              <a href="https://cerdasia-website.vercel.app/" target="_blank" rel="noreferrer">
                <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Demo</button>
              </a>
              <a href="https://github.com/bernadettechrestella/cerdasia_website" target="_blank" rel="noreferrer">
                <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Code</button>
              </a>
            </div>
          </div>

          <div className='bg-button rounded-xl shadow-lg shadow-cyan-500/50 hover:scale-105 ease-in-out'>
            <div className='h-full w-full border-accent border-4 rounded-xl bg-button '>
              <img src={bmiCalc} alt='/' className='h-full w-full rounded-lg' />
            </div>
          </div>
          <div className='md:py-4 sm:py-2 px-1'>
            <p className='font-semibold text-2xl tracking-widest'>BMI Calculator</p>
            <p className='pt-2 pb-4'>A simple BMI Calculator.</p>
            <p className='font-semibold text-lg'>Tools Used</p>
            <ul className='flex flex-wrap pb-3'>
                <li className='p-1.5 rounded-xl border border-accent m-1'>HTML</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>CSS</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Java Script</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Tailwind Css</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>React Js</li>
            </ul>
            <div className='flex gap-3'>
            <a href="https://bmi-calculator-react-bernadettechrestella.vercel.app/" target="_blank" rel="noreferrer">
              <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Demo</button>
            </a>
            <a href="https://github.com/bernadettechrestella/bmi-calculator-react" target="_blank" rel="noreferrer">
              <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Code</button>
            </a>
            </div>
          </div>

          <div className='bg-button rounded-xl shadow-lg shadow-cyan-500/50 hover:scale-105 ease-in-out'>
            <div className='h-full w-full border-accent border-4 rounded-xl bg-button '>
              <img src={crypto} alt='/' className='h-full w-full rounded-lg' />
            </div>
          </div>
          <div className='md:py-4 sm:py-2 px-1'>
            <p className='font-semibold text-2xl tracking-widest'>Cryptobase</p>
            <p className='pt-2 pb-4'>Website about Crypto using API from Coin Gecko and Firebase for Sign Up, Sign In and saving coins. When user already Sign In, they can click star at coin list, so the coin that has star will be added to their account.</p>
            <p className='font-semibold text-lg'>Tools Used</p>
            <ul className='flex flex-wrap pb-3'>
                <li className='p-1.5 rounded-xl border border-accent m-1'>HTML</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>CSS</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Java Script</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Tailwind Css</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>React Js</li>
                <li className='p-1.5 rounded-xl border border-accent m-1'>Firebase</li>
              </ul>
            <div className='flex gap-3'>
            <a href="https://cryptobase-672b4.web.app/" target="_blank" rel="noreferrer">
              <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Demo</button>
            </a>
            <a href="https://github.com/bernadettechrestella/crypto-project" target="_blank" rel="noreferrer">
              <button className='bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold py-2 px-12 rounded-full uppercase'>Code</button>
            </a>
            </div>
          </div>
          
        </div>
          
      </div>
    </div>
  )
}

export default Project