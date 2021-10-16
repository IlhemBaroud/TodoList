import Header from "./Components/Header";
import ToDoList from "./Components/TodoList";
import ToDoForm from "./Components/TodoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from "react";
import data from "./todo.json";

 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
  
  const addTask = (userInput) => {
  let listToDoCopy = toDoList ;
  listToDoCopy = [...toDoList, {"id" : toDoList.length+1, "task" : userInput, 
                                 "complete" : false}]
  setToDoList(listToDoCopy);                            
 }
 
 const handleDelete = (id) => {
  let listToDoCopy = toDoList.filter(todo => todo.id.toString()!==id
  );
  setToDoList(listToDoCopy);
}
const handleDone = (id) => {
  let listToDoCopy = toDoList.map(todo => 
    todo.id.toString()===id?{...todo,complete:true}:{...todo})
  setToDoList(listToDoCopy);
}
 return (
   <div>
     <Header  />
     <div className="container-fluid bottom-screen">
     <div className="container bottom-screen-content">  
     <ToDoForm addTask={addTask} />
     <ToDoList toDoList={toDoList} handleDelete={handleDelete} handleDone={handleDone} />
     </div>
     </div>
   </div>
 );
}
 
export default App;