import React from 'react'
import { Link } from 'react-scroll'
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import { HiOutlineNewspaper } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='bg-button text-btnText'>
        <div className='max-w-[1100px] md:m-auto mx-2 pt-8'>
            <div className='flex md:flex-row flex-col justify-between pb-4'>
                <div className='md:text-left text-center'>
                    <p className='uppercase text-xl font-bold tracking-widest'>Bernadette Chrestella</p>
                    <ul className='font-semibold'>
                        <li className='py-1 cursor-pointer'>
                            <Link to='home' smooth={true} duration={500}>
                            Home
                            </Link>
                        </li>
                        <li className='py-1 cursor-pointer'>
                            <Link to='about' smooth={true} duration={500}>
                            About
                            </Link>
                        </li>
                        <li className='py-1 cursor-pointer'>
                            <Link to='project' smooth={true} duration={500}>
                            Projects
                            </Link>
                        </li>
                        <li className='py-1 cursor-pointer'>
                            <Link to='contact' smooth={true} duration={500}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col justify-between md:text-left text-center'>
                    <div className='flex flex-wrap justify-center py-4'>
                        <HiOutlineNewspaper size={30} className='mr-1'/>
                        <p className='tracking-wider text-xl font-semibold'>
                            My Resume
                        </p>
                    </div>
                    <div>
                        <p className='uppercase text-xl tracking-wider font-bold pb-3'>Social Media</p>
                        <div className='flex flex-wrap justify-around'>
                            <a href="https://www.linkedin.com/in/bernadette-chrestella/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={25} className='my-2 cursor-pointer'/>
                            </a>
                            <a href="https://www.youtube.com/@bernadettechrestella" target="_blank" rel="noreferrer">
                                <FaYoutube size={25} className='my-2 cursor-pointer'/>
                            </a>
                            <a href="https://github.com/bernadettechrestella" target="_blank" rel="noreferrer">
                                <FaGithub size={25} className='my-2 cursor-pointer'/>
                            </a>
                            <a href="https://www.instagram.com/bernadette.chrestella/" target="_blank" rel="noreferrer">
                                <FaInstagram size={25} className='my-2 cursor-pointer'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 dark:border-gray-500 py-2 flex gap-1 justify-center'>
                <p className='text-sm'>© Copyright {new Date().getFullYear()}. Made by</p>
                <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
                    <p className='text-sm font-semibold'>Bernadette Chrestella</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer