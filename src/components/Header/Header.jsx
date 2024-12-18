import React, { useEffect, useState } from 'react'
import Scroll from '../ScrollBar/Scroll';
// import {Link} from 'react-router-dom'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    window.addEventListener("scroll", () => {
        const scrl = window.scrollY;
        setIsScrolled(scrl > 1)
    })

  return (
    <>
        <div className={`w-full h-20 flex justify-around items-center text-xl ${isScrolled ? "bg-white" : "bg-transparent"} fixed top-0 left-0 overflow-hidden z-50`}>
            <div className="text-2xl">
                <h1 className='text-nowrap'>AADILA FARMHOUSE</h1>
            </div>
            <div className="flex justify-between gap-10 list-none">
                <li><a href='#'>ABOUT US</a></li>
                <li><a href=''>DINING</a></li>
                <li><a href=''>LOCATION</a></li>
                <li><a href=''>CONTACT US</a></li>
            </div>
            <div className="text-lg px-11 py-4 text-white font-bold bg-[#AD8B3A] ">
                <button className='uppercase' >Book A Stay</button>
            </div>
        </div>
        <Scroll />
    </>
  )
}

export default Header