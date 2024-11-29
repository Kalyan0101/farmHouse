import React from 'react'
// import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="w-full flex justify-around text-xl mt-5 ">
            <div className="text-3xl">
                <h1>AADILA FARMHOUSE</h1>
            </div>
            <div className="flex justify-between gap-10 list-none">
                <li><a>ABOUT US</a></li>
                <li><a>DINING</a></li>
                <li><a>LOCATION</a></li>
                <li><a>CONTACT US</a></li>
            </div>
            <div className="text-lg px-11 py-4 text-white font-bold bg-[#AD8B3A] ">
                <button className='uppercase' >Book A Stay</button>
            </div>
        </div>
    </>
  )
}

export default Header