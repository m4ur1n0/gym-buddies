import React from 'react'

const WorkoutEndTopContent = ({name, start, end, date, streak}) => {
  return (
    <div className='workout-top-content flex flex-row flex-nowrap w-full'>

      <div className='streak m-3 w-[6%] rounded-full bg-gray-300'>
        <p className='text-2xl font-bold text-nowrap'>🔥{streak}</p>
      </div>

      <div className='flex flex-col'>

        <p className='font-medium'>{name} just finished a workout!</p>
        <div className='flex flex-row'>
          <p className='font-medium'>{start} - {end}</p>
          <p className='font-normal text-gray-600'>{date}</p>
        </div>

      </div>
      
    </div>
  )
}

export default WorkoutEndTopContent
