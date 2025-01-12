import Logo from '@/components/Logo'
import WorkoutFeed from '@/components/WorkoutFeed'
import React from 'react'

const index = () => {
  return (
    <div className='full-page w-full h-full flex flex-col justify-start items-center bg-app_background '>
      <Logo />

    <div className='w-full px-5'>
      <h2 className='text-app_white left-[10%] mt-10'>Home</h2>
    </div>


    <WorkoutFeed />

        
    </div>
  )
}

export default index
