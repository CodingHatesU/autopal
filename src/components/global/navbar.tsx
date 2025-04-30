import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
      <aside className='flex items-center gap-[2px]'>
        <p className='text-3xl font-bold'>
          Au
        </p>
        <Image 
          src='/fuzzieLogo.png'
          width={15}
          height={15} 
          alt={'t'}
        />
        <p className='text-3xl font-bold'>
          opal
        </p>
      </aside>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] trnslate-y-[-50%] hidden md:block'>
        <ul className='flex items-center gap-4 list-none'>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>  
      <aside className='flex items-center gap-4'>
        <Link href="/dashboard" className="p-[03px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm px-1 py-1" />
            <div className="px-8 py-1  bg-black rounded-sm  relative group transition duration-200 text-white hover:bg-transparent">
              {
                //WIP: wire up user
                true ? 'Dashboard' : 'Get Started'
              }
            </div>
        </Link>
        {//WIP: wire up user
        }
        <MenuIcon className='md:hidden'/>
      </aside>
    </header>
  )
}

export default Navbar;