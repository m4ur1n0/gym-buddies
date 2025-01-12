import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const InputWorkout = () => {


    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);


    const [exerciseInput, setExerciseInput] = useState({name : '', reps : ''});
    const [exercises, setExercises] = useState([]);

    // exercises === [{"exercise" : 4}, {"exercise" : 10}, ... ]
    // exercises === [{name: "pull up", reps : 4}, ]

    const handleCommitExercise = () => {
        // push excercise stored in ererciseInput into exercises (rendering it)
        // clear exercise inpuyt

        setExercises([...exercises, exerciseInput]);

        setExerciseInput({name : '', reps : ''});
    }

    const handleExerciseChange = (event) => {
        setExerciseInput({
            ...exerciseInput,
            name : event.target.value
        })

        // handle any validation or whatever else here
        console.log(exerciseInput);
        
    }

    const handleRepsChange = (event) => {
        setExerciseInput({
            ...exerciseInput,
            reps : event.target.value
        })

        // handle any validation or whatever else here
        console.log(exerciseInput);
    }



  return (
    <div className='input-component w-full flex flex-col justify-center items-center'>
        <form>
            <div className='flex flex-col justify-center items-center w-full'>

                <label htmlFor='start-time' className='text-app_white'>Start Time</label>
                <input id='start-time' type='datetime-local' />

                <label htmlFor='end-time' className='text-app_white'>End Time</label>
                <input id='end-time' type='datetime-local' />

            </div>


            <div className='exercise-input-field flex flex-col w-[90%]  max-h-[60%] mt-10'>

                <div className='already-input-exercises flex flex-col justify-center items-center'>
                    {
                        exercises.map((exercise, idx) => (
                            <div key={idx} className='exercise-in-input-list'>
                                <p className='text-app_white'>{exercise['name']}   :   {exercise['reps']} </p>
                            </div>
                        ))
                    }
                </div>


                <div className='flex flex-row gap-2'>

                    <div className='flex flex-col'>
                        <label htmlFor='input-exercise-name' className='text-app_white'>Exercise Name</label>
                        <input 
                            id='input-exercise-name' 
                            type='text' 
                            placeholder='...' 
                            onChange={handleExerciseChange}
                            value={exerciseInput['name']}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='input-reps' className='text-app_white'>Reps/Time</label>
                        <input 
                            id='input-reps' 
                            type='number' 
                            className='w-[20%]' 
                            placeholder='0' 
                            onChange={handleRepsChange}
                            value={exerciseInput['reps']}
                        />
                    </div>


                    <div className='commit-workout rounded-full bg-app_teal flex flex-col justify-center items-center w-[40px] h-[40px] cursor-pointer'
                        onClick={handleCommitExercise}
                    >
                        <FontAwesomeIcon className=' text-app_white ' icon={faPlus} />
                    </div>
                </div>



                
            </div>
        
        </form>
      
    </div>
  )
}

export default InputWorkout
