import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const Navbar = () => {
  return <nav className=' mb-8 py-6 flex justify-center items-center'>

  {/*
    <div className='flex flex-shrink-0 items-center'>
      <img className='mx-2 w-10' src={logo} alt="" />
    </div>
    */}

    {/*
    <div className='flex flex-shrink-0 items-center'>
      <h1 className='text-2xl'>Foysal Imtiaz Sabab</h1>
    </div>
    */}


    <div className='m-8 text-2xl flex items-center justify-center gap-4'>
      <a href="https://github.com/foysal-imtiaz" target='_blank' className='hover:text-gray-400'><FaGithub /></a>
      <a href="https://www.linkedin.com/in/foysalimtiaz/" target='_blank' className='hover:text-gray-400'><FaLinkedin /></a>
      <a href="https://x.com/foysal_imtiaz" target='_blank' className='hover:text-gray-400'><FaSquareXTwitter /></a>
    </div>
  </nav>
}

export default Navbar