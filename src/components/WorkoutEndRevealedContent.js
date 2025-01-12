import React from 'react';

const WorkoutEndRevealedContent = ( {workoutObj} ) => {
  return (
    <div className='workout-top-content flex flex-row flex-nowrap w-full p-2'>
      <div className='bg-gray-200 p-2 w-full'>
        <ul>
          {Object.entries(workoutObj).map((exercise, idx) => (
            <li key={idx}>
              <div className=''>
                <p>{exercise[0]} <span className='font-bold'>x</span> {exercise[1]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutEndRevealedContent;
