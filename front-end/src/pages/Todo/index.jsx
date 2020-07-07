import React , { useEffect , useState } from 'react'
import { Todos } from '../../api'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner , faTimesCircle , faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Todo() {
        
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);    
    const [content,setContent] = useState("");

    useEffect(() => {
        
        Todos.get().then( todos => {            
            setTodos(todos);
            setLoading(false);
        });
                        
    }, []);

    function mountTodoList(){             
        if(todos.length > 0){           
            return todos.map(todo => {
                return (
                    <>
                    <li className="todo-list-item" key={todo.id}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                        <input className="todo-list-input" type="text" value={todo.content}/> 
                        <FontAwesomeIcon icon="coffee" />
                    </li>                
                    </>
                );
            });
        }else{
            return <li className="todo-list-item" > No has todo registred. </li>                         
        }
    }

    function getData(){
        if(loading){
            return <FontAwesomeIcon icon={faSpinner} pulse rotation={270} /> 
        }else{
            return mountTodoList();
        }        
    }

    function saveTodo(id = 0){
        if(id !== 0){
            //save
            let todo = {
                content : content,
                isFinished : 0
            };

            Todos.save(todo).then(res=>{
                alert(`Saved new todo : ${content}`);
            })
        }else{
            // update
        }
        
    }        

    const data = getData();

    return (
        <div className="todo-container">
            <div className="add-todo-container">
                <input type="text" placeholder="Content TODO" className="txt-content-todo" value={content} onChange={(e)=>setContent(e.target.value)}/>
                <FontAwesomeIcon className="add-todo" icon={faPlus} onClick={saveTodo} /> 
            </div>
            <ul className="todo-list-container">
                {data}
            </ul>
        </div>
    )
}
