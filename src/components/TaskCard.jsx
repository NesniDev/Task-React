import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { AiOutlineCloseCircle } from "react-icons/ai";



function TaskCard({tasks}) {
  
  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md break-words normal-case shadow-lg'>
        <h1 className='font-bold text-center text-2xl uppercase'>{tasks.title}</h1>
        <p className='text-justify text-gray-500 text-sm my-5 '>{tasks.description} </p>
        <div className='flex justify-center'>
          <button onClick={() => deleteTask(tasks.id)} className="bg-red-500 py-1 px-5 rounded-md hover:bg-red-400 font-bold text-2xl "><AiOutlineCloseCircle/></button>
        </div>
    </div>
  )
}

export default TaskCard
