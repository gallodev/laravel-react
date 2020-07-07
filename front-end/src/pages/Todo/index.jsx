import React , { useEffect , useState } from 'react'
import { Todos } from '../../api'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner , faTimesCircle , faPlus } from '@fortawesome/free-solid-svg-icons'
//import Modal from 'react-modal';


export default function Todo() {
    
    

    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

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
        return (loading)? <FontAwesomeIcon icon={faSpinner} pulse rotation={270} /> : mountTodoList();
    }

    function addTodoModal(){
        alert("add");

    }

    const data = getData();

    return (
        <div className="todo-container">
            <div className="add-todo-container" onClick={addTodoModal}>
                <FontAwesomeIcon className="add-todo" icon={faPlus} /> 
            </div>
            <ul className="todo-list-container">
                {data}
            </ul>
        </div>
    )
}
