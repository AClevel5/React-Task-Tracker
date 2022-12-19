import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Clean Car',
      day: 'Nov 23rd at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Wash Towels',
      day: 'Nov 24rd at 2:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Do Dishes',
      day: 'Nov 25rd at 2:30PM',
      reminder: true,
    },

  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => { setTasks(tasks.filter((task) => task.id !== id)) }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No Tasks'}
    </div>
  );
}

//Example of a Class
// class App extends React.Component{
//   render(){
//     return <h1>Class</h1>
//   }
// }


export default App;
