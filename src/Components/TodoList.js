import ToDo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css"

 
const ToDoList = ({toDoList, handleDelete, handleDone}) => {
   return (
       <div className="row">
           <div className="col-6">
           {toDoList.map(todo => 
                   <ToDo todo={todo} handleDelete={handleDelete} handleDone={handleDone} />
               )
           }
           </div>
       </div>
   );
};
 
export default ToDoList;