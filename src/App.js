import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
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

  const deleteTask = (id) => { setTasks(tasks.filter((task) => task.id !== id)) }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className="container">
      <Header />
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
