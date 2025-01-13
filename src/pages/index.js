import Logo from '@/components/Logo'
import WorkoutFeed from '@/components/WorkoutFeed'
import Login from  '@/components/Login'
import React, {useState} from 'react'

const index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className='full-page w-full h-full flex flex-col justify-start items-center bg-app_background '>
      <Logo />

      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <div className='w-full px-5'>
            <h2 className='text-app_white left-[10%] mt-10'>Home</h2>
          </div>
          <WorkoutFeed />
        </>
      )}

        
    </div>
  )
}

export default index
