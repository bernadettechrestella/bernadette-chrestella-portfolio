import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen justify-center p-4
      bg-gradient-to-b to-white via-gray-100 from-gray-200 dark:bg-gradient-to-b dark:to-black dark:via-slate-800 dark:from-gray-700'>
        <div className='justify-center items-center max-w-[1000px] w-full m-auto'>
          <form 
            id='formContact'
            method='POST'
            action='https://getform.io/f/c2443d44-9d7a-4fce-98b3-761fa1433121'
            className='m-auto max-w-[600px] w-full justify-center'>
              <div className='pb-4 text-center'>
                  <p className='text-4xl font-bold inline border-b-4 border-accent'>Contact.</p>
                  <p className='pt-3'>Feel free to contact me</p>
              </div>

              <div className='flex flex-col max-w-[600px] w-full border border-accent rounded-xl p-4'>
              <label className='font-semibold pb-1'>Name</label>
              <input type="text" placeholder='Name' name='name' className='border border-accent rounded-lg p-2 mb-2 text-accent bg-primary'/>
              
              <label className='font-semibold pb-1'>Email</label>
              <input type="email" placeholder='Email' name='email' className='border border-accent rounded-lg p-2 mb-2 text-accent bg-primary' />
              
              <label className='font-semibold pb-1'>Message</label>
              <textarea name="message" rows="10" placeholder='Message' className='border border-accent rounded-lg p-2 mb-2 text-accent bg-primary'></textarea>
              <button className='px-4 py-3 my-2 mx-auto flex items-center bg-button text-btnText dark:hover:bg-teal-500 hover:text-primary hover:bg-cyan-400 font-semibold rounded-full uppercase'>Let's Collaborate</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Contact