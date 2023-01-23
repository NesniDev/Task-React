import { createContext } from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect } from "react";

export const TaskContext = createContext(); //retorna un objeto

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  //AL CARGAR EL COMPONENTE TASKLIST
  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(taskObj) {
    setTask([
      ...task,
      {
        title: taskObj.title,
        id: task.length,
        description: taskObj.description,
      }
      
    ]);
    
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider value={{
        task,
        deleteTask,
        createTask
    }}>{props.children}
    
    </TaskContext.Provider>
  );
}

export default TaskContext;
