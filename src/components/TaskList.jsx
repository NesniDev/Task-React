import TaskCard from './TaskCard'
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList({}) {
  const {task} = useContext(TaskContext)
  // console.log(data);
  if(task.length === 0) {
    return (
      <div class="flex justify-center items-center bg-slate-500 rounded-md text-white text-xl font-bold px-1 py-3 w-17 h-10 mt-20" role="alert">
        <svg class="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p className='capitalize'>No existen tareas</p>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-4 gap-6 p-4'>
      
      {task.map((tasks) =>(
        <TaskCard tasks={tasks} key={tasks.id} />
        
      ))}
      
    </div>
  )
}

export default TaskList

