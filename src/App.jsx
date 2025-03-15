import './App.css'
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import {useState} from "react";

const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]

function App() {

    const [newTodo, setNewTodo] = useState(todos)
    const addTodo = (newTodo) => setNewTodo((prev) => {
        return [...prev, {id: prev.length+1, title: newTodo}] //when deletion will work, I'll change the principle of assigning the id, for now just added for work.
    })

    return (
        <div>
            <h1>My Todos</h1>
            <TodoForm addTodo={addTodo}/>
            {newTodo[newTodo.length-1].title}
            <TodoList todos={newTodo}/>
        </div>
    )
}

export default App
