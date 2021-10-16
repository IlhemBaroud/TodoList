import '../App.css'

const ToDo = ({todo, handleDelete, handleDone}) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.currentTarget.value==="Delete"?
        handleDelete(e.currentTarget.id):handleDone(e.currentTarget.id);
    }

       
   return (
       
       
           <div className="row">
           <div className="col-8" style={{color:todo.complete?'black':'red'}}>{todo.task}</div>
           <div className="col-2" ><input className="btn btn-danger" type="submit" id = {todo.id} value="Delete" onClick={handleClick} /></div>
           <div className="col-2"><input type="submit" 
           className={todo.complete?'btn btn-success':'btn btn-warning'}
           id = {todo.id} value="Done" onClick={handleClick} /></div>
           <div><hr /></div>
           </div>
           
       
   );
};
 
export default ToDo;