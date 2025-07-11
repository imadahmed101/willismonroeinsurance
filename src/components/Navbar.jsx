import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Services',
    link: '/services'
  },
  {
    title: 'Contact',
    link: '/contact'
  },
  {
    title: 'Quote',
    link: '/quote'
  }
]

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (

    <header className='bg-[#123654] border-b-[0px] border-white text-white font-semibold'>
      <div className='px-4 md:max-w-[1400px] md:mx-auto py-2'>
        <div className='flex justify-end'>
          <a href="tel:+1-416-609-9500" className='flex flex-row mb-2 border-b-[1px] border-transparent hover:border-white transition duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 my-auto">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            416-609-9500
          </a>
        </div>
        <div className='flex justify-between'>
          <h1>
            <Link to='/' className='text-lg' onClick={() => setOpen(false)}>
              Willis & Monroe Associates
            </Link>
          </h1>
          <button aria-label='Open the menu' onClick={() => setOpen((prev) => !prev)}>
            {!open &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex md:hidden w-5 h-5 my-auto">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            }
            {open &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex md:hidden w-5 h-5 my-auto">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            }
          </button>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-8'>
            {links.map((item, key) => (
              <Link
                to={item.link}
                key={key}                
                className='border-b-[1px] border-transparent hover:border-white transition duration-300'
              >
                {item.title}
              </Link>
            ))
            }
          </nav>
        </div>
      </div>
      {/* Mobile Navigation */}
      {open &&
        <nav className='flex flex-col md:hidden w-full bg-black'>
          {links.map((item, key) => (
            <Link 
            to={item.link} 
            key={key} 
            className='flex justify-between py-2 px-4 border-b-[1px] border-gray-700 hover:bg-gray-800 transition duration-300'
            onClick={() => setOpen(false)}
            >
              {item.title}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 my-auto">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </nav>
      }
    </header>
  )
}
export default Navbar