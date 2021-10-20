import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import {useState} from 'react'

const ToDoForm = ({addTask}) => {
    const [userInput , setUserInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }
    
    const handleChange=(e)=>{
        console.log(e);
        setUserInput(e.currentTarget.value)
    }
    
    
    return (
    <Form>
        <div className="row">

          <div className="col-6 add-form">
          <label>New task</label>
          <input type="text" value={userInput} placeholder="Enter task..."  
          onChange={handleChange} />
     
          <input type="submit" value = "Add" onClick={handleSubmit} />
        </div>

        </div>

    </Form>

        
    )

}
export default ToDoForm;