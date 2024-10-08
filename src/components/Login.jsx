import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
 const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        navigate('/profile')
    }
  return (
    
 <>
  <div className='w-1/2 mt-16 mx-auto border p-5 rounded-lg bg-slate-600 '>
        <h2>Login</h2>
        <input type='text'
        className='bg-gray-50 border my-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
  
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleSubmit}>Submit</button>

        
    </div>
 </>
  )
}

export default Login;