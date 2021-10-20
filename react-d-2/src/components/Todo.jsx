import {useState} from "react";
import "./todo.css";

function Todo() {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const handletext = (e) => {
        setText(e.target.value);
    }
    const handleTodos = () => {
        setTodo([...todo, text]);
        setText("");
    }
    return (
        <div>
           { todo.map(e => 
                <div className = "message">{e} </div>
            )}
            <input className = "inputMessage" onChange = {handletext} value = {text} placeholder = "Enter the text" />
            <button className = "sendMessage" onClick  = {handleTodos}>+</button>
        </div>
    );
}

export {Todo};