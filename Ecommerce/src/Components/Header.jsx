import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import { FaOpencart } from "react-icons/fa";

import './Header.css'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => setMenuOpened(!menuOpened)

  return (
    <header className='fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10'>
    <div className='px-4 flexBetween py-3 max-xs:px-2'>
      {/* for logo */}
      <div className='px-4 flexBetween py-3 max-xs:px-2'>
            <Link> <img src={logo} alt="" height={66} width={88} /> </Link>
      </div>
      {/* for navbar  in desktop*/}
      <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10"}/>
      {/* for navbar  in mobile*/}

      <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : 
      "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>

      {/* for button */}
      <div>
        {!menuOpened ? ( <MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary' onClick={toggleMenu}/>):(<MdClose className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary' onClick={toggleMenu}/>)}
        <div className='flexBetween sm:gap-x-6'>
          <NavLink  to={"cart-page"} className={"flex"}> <FaOpencart/>
          </NavLink>

        </div>
      </div>
    </div>


    </header>
  )
}

export default Header