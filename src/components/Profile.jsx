import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const{user}=useContext(UserContext)
  
   if(!user)
   return <p className='w-1/2 mx-auto text-4xl text-gray-900'>Profile:Login please</p>

  return <h1 className=' w-1/2 mx-auto text-4xl text-gray-900'>Profile:{' '}{user.username}</h1>
}

export default Profile