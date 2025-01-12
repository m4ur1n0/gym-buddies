import React from 'react'
import WorkoutEndRevealedContent from './WorkoutEndRevealedContent'
import WorkoutEndTopContent from './WorkoutEndTopContent'
import WorkoutItem from './WorkoutItem'

const WorkoutFeed = () => {

    const feedData = [
        {
            name : "John Pork",
            start : "13:01:22",
            end : "13:50:10",
            date : "01/14/2024",
            workout : {
                "Pull Up" : 4,
                "Weighted Chin Up" : 3,
                "Leg Press" : 12,
                "Hammer Curl" : 6,
                "Seated Row" : "10min"
            }
        },
        {
            name : "John Pork",
            start : "13:01:22",
            end : "13:50:10",
            date : "01/14/2024",
            workout : {
                "Pull Up" : 4,
                "Weighted Chin Up" : 3,
                "Leg Press" : 12,
                "Hammer Curl" : 6,
                "Seated Row" : "10min"
            }
        },
        {
            name : "John Pork",
            start : "13:01:22",
            end : "13:50:10",
            date : "01/14/2024",
            workout : {
                "Pull Up" : 4,
                "Weighted Chin Up" : 3,
                "Leg Press" : 12,
                "Hammer Curl" : 6,
                "Seated Row" : "10min"
            }
        },
    ]

  return (
    <div className='workouts-feed bg-app_white w-[90%] max-h-[50%] min-h-[50%] mt-10 p-3 overflow-scroll flex flex-col gap-2'>
        {
            feedData.map((entry, idx) => (
                <div className='' key={idx}>
                    <WorkoutItem topContent={<WorkoutEndTopContent name={entry.name} start={entry.start} end={entry.end} date={entry.date} streak={9} />} revealedContent={<WorkoutEndRevealedContent workoutObj={entry.workout} />} />
                </div>
            ))
        }
    </div>
  )
}

export default WorkoutFeed
