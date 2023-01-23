import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="pt-6 pb-20 " >
      <div className="container mx-auto my-auto">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

export default App;
