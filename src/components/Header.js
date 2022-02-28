import React from 'react'
import Image from "next/image"
import { 
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid"
function Header() {
  return (
    <header className='sticky top-0 z-50 
    grid grid-cols-3 
    bg-white shadow-md py-5 px-5 md:px-10'>
        
        {/* left */}
        <div className='
        relative flex items-center 
        h-10 cursor-poi nter my-auto'>
          <Image
            
            objectFit='contain'
            objectPosition="left"
            src="https://links.papareact.com/qd3" layout="fill"
          />
        </div>
        {/* middle */}
        <div className='flex items-center md:border-2 
        rounded-full py-2 md:shadow-sm '> 
          <input className='pl-5 bg-transparent outline-none flex-grow text-gray--600 placeholder-gray-400'
           type="text" placeholder='Start your search' />
          
          <SearchIcon  className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        {/* right */}
        <div className='flex space-x-4 items-center justify-end text-gray-500 '> 
          <p className='cursor-pointer hidden md:inline'>Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>
          <div className='flex space-x-2 items-center border-2 p-2 rounded-full'>
            <MenuIcon className='h-6 cursor-pointer'/>
            <UserCircleIcon className='h-6 cursor-pointer'/>
          </div>
        </div>
        
    </header>
    
  )
}

export default Header 