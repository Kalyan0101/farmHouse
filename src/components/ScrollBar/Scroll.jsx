import React, { useEffect, useState } from 'react'

function Scroll() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const calculateScrollPostion = () => {
        const scrollTop = document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;

        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        setScrollPosition(scrollPercent);
    }
    useEffect(() => {
        window.addEventListener("scroll", calculateScrollPostion);
        
        return () => {
            window.removeEventListener("scroll", calculateScrollPostion);
        };
    },[]);


  return (
    <div className='mb-20'>
        <div 
        className="fixed top-20 left-0 h-0.5 bg-[#007bff] transition-[width] duration-100 ease-out z-50"
        style={{width: `${scrollPosition}%`}}
        ></div>
    </div>
  )
}

export default Scroll