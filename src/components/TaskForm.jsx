import {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'
import { AiFillFolderOpen } from "react-icons/ai";


function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const {createTask} = useContext(TaskContext)

  //manejar el evento submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title)
        createTask({
          title,
          description
        });
        setTitle("")
        setDescription("")
    }
  return (
    <div className='max-w-md max-h-96 mx-auto '>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 mb-4 rounded-3xl  shadow-lg">
        <h1 className='text-2xl text-orange-200 italic font-bold text-center uppercase mb-7' >Crea tu tarea</h1>
        <input onChange={(e)=> setTitle(e.target.value)} placeholder='Nombre de la tarea' autoFocus required value={title} className="bg-slate-300 p-3 w-full mb-2 rounded-md"/>
        <textarea placeholder='Breve descripción' onChange={(e)=> setDescription(e.target.value)} required value={description} className="bg-slate-300 p-3 w-full mb-2 rounded-md"></textarea>
        <div className='flex justify-center'>
          <button className='bg-orange-600 hover:bg-orange-400 hover:scale-110 transition-all px-9 py-2 mt-2 rounded-md font-semibold text-white text-2xl'><AiFillFolderOpen/></button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
