import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useRouter } from 'next/router'

const NavBar = () => {

    const router = useRouter();

    const handleClick = (to) => {
        router.push(to);
    }

  return (
    <div className='navbar flex flex-row border h-[9%] bg-app_white w-full px-10 justify-between items-center overflow-visible'>

        <div className='home cursor-pointer' onClick={() => handleClick('/')}>
            <FontAwesomeIcon className='text-app_black text-4xl' icon={faDumbbell} />
        </div>

        <div onClick={() => handleClick('/add-workout')} className='new-workout cursor-pointer absolute rounded-full w-[86px] h-[86px] flex flex-col justify-center items-center aspect-square bottom-[2%] left-[40%] bg-app_teal border-8 border-app_background'>
            <FontAwesomeIcon className='text-app_white text-5xl' icon={faPlus} />
        </div>

        <div onClick={() => handleClick('/profile')} className='profile-link cursor-pointer'>
            <FontAwesomeIcon className='text-app_black text-4xl' icon={faUser} />
        </div>
        
      
    </div>
  )
}

export default NavBar
