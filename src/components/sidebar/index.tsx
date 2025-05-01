'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constant';
import clsx from 'clsx';
import { Separator } from '../ui/separator';
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react';
import { ModeToggle } from '../global/mode-toggle';


type Props = {}

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className='flex flex-col justify-between items-center gap-0 px-2 py-6 dark:bg-black h-screen overflow-scroll'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <Link
          className='flex flex-row'
          href="/"
        >
          <p className='text-xl font-bold'>
            Autopal
          </p>
        </Link>
        <TooltipProvider>
          { menuOptions.map((menuItem) => (
            <ul key={menuItem.name} >
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={
                        clsx(
                          'flex justify-center items-center h-8 w-8 p=[3px] scale-[1.5] rounded-lg cursor-pointer group',
                          {
                            'dark:bg-[#2F006B] bg-[#EEE0FF]': pathName === menuItem.href
                          }
                        )
                      }
                    >
                      <menuItem.Component selected={pathName === menuItem.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                  {menuItem.name}
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator/>
        <div className='flex flex-col items-center px-2 py-4 h-56 gap-9 border-[1px] border-[#353346]  dark:bg-[#353346]/30 rounded-full overflow-scroll'>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-[2px] border-[1px] dark:border-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-[2px] border-[1px] dark:border-[#353346]">
            <GitBranch
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-[2px] border-[1px] dark:border-[#353346]">
            <Database
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-8'>
        <ModeToggle/>
      </div>
    </nav>
  )
}

export default Sidebar;