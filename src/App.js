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
    }

  ])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
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
