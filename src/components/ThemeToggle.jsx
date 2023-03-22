import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
        {theme === 'dark' ? (
            <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <div className='shadow-xl rounded-full p-0.5 bg-sky-200'>
                    <div className='shadow-xl rounded-full p-0.5 bg-white'>
                        <div className='flex rounded-full bg-sky-200 p-1'>
                            <HiMoon className='text-primary text-2xl text-sky-700'/>
                            <HiSun className='text-primary text-2xl text-gray-400'/>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='flex items-center cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <div className='shadow-xl rounded-full p-0.5 bg-amber-200'>
                    <div className='shadow-xl rounded-full p-0.5 bg-white'>
                        <div className='flex rounded-full bg-amber-200 p-1'>
                            <HiMoon className='text-primary text-2xl text-gray-400'/>
                            <HiSun className='text-primary text-2xl text-amber-600'/>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default ThemeToggle