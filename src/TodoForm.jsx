import {useRef} from "react";

function TodoForm({addTodo}) {

    const newText = useRef()
    const newTextHandler = () =>{
        const text= newText.current.value.trim()
        if (text) {
            addTodo(text);
            newText.current.value = "";
        }
    }

    return (
            <form onSubmit={(e) => {
                e.preventDefault(); newTextHandler()
            }}>
                <label htmlFor="todoTitle">Todo</label>
                <input id="todoTitle" type="text" ref={newText}/>
                <button type="submit">"Add Todo"</button>
            </form>
    )
}

export default TodoForm;