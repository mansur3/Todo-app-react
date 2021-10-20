import {useState} from "react";

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
                <div>{e} </div>
            )}
            <input onChange = {handletext} value = {text} placeholder = "Enter the text" />
            <button onClick  = {handleTodos}>ADD Todo</button>
        </div>
    );
}

export {Todo};