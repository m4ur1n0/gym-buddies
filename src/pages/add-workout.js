import InputWorkout from '@/components/InputWorkout';
import React, { useState } from 'react'

const AddWorkout = () => {

  const [currentWorkout, setWorkout] = useState({});

  return (
    <div className='add-workout-page w-full h-full bg-app_background p-4 flex flex-col items-center justify-center'>
      
      <InputWorkout />


      
    </div>
  )
}

export default AddWorkout
