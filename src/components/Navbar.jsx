import React, { useState } from 'react'
import profileLight from '../assets/BC-light.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav)
    }
    const handleClose = () => {
      setNav(!nav)
    }
  
    return (
      <header>
        <nav className='flex justify-between items-center w-full px-4 h-20 shadow-xl rounded-xl fixed backdrop-blur-sm'>
          
          <div>
            <img src={profileLight} alt="/" className='w-14 cursor-pointer rounded-full' />
          </div>

          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="hidden md:flex md:flex-row md:items-center md:gap-[4vw] font-semibold">
                    <li>
                      <Link to='home' smooth={true} duration={500}>
                        <p className="hover:text-accent cursor-pointer">Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='about' smooth={true} duration={500}>
                        <p className="hover:text-accent cursor-pointer">About</p>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to='resume' smooth={true} duration={500}>
                        <p className="hover:text-accent cursor-pointer">Resume</p>
                      </Link>
                    </li> */}
                    <li>
                      <Link to='project' smooth={true} duration={500}>
                        <p className="hover:text-accent cursor-pointer">Project</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='contact' smooth={true} duration={500}>
                        <p className="hover:text-accent cursor-pointer">Contact</p>
                      </Link>
                    </li>
                </ul>
            </div>

            <div className='hidden md:block'>
              <ThemeToggle />
            </div>
            
            {/* Menu Icon */}
            <div onClick={handleNav} className='md:hidden cursor-pointer z-10'>
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
        </nav>

            {/* Mobile Menu */}
            <div className={nav ? 'flex-col flex fixed items-end inset-0 left-0 uppercase backdrop-blur-lg gap-8 justify-start pt-20 pr-5 md:hidden font-semibold' : 'hidden'}
               onClick={handleNav}>
              <ThemeToggle/>
              <ul>
                <li className='py-6 cursor-pointer'>
                  <Link to='home' smooth={true} duration={500} onClick={handleClose}>
                  Home
                  </Link>
                </li>
                <li className='py-6 cursor-pointer'>
                  <Link to='about' smooth={true} duration={500} onClick={handleClose}>
                  About
                  </Link>
                </li>
                {/* <li className='py-6 cursor-pointer'>
                  <Link to='resume' smooth={true} duration={500} onClick={handleClose}>
                  Resume
                  </Link>
                </li> */}
                <li className='py-6 cursor-pointer'>
                  <Link to='project' smooth={true} duration={500} onClick={handleClose}>
                  Projects
                  </Link>
                </li>
                <li className='py-6 cursor-pointer'>
                  <Link to='contact' smooth={true} duration={500} onClick={handleClose}>
                  Contact
                  </Link>
                </li>
              </ul>
            </div>
        
      </header>
  )
}

export default Navbar