function TodoForm() {
    return (
        <ul>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor={"todoTitle"}>Todo</label>
                <input id="todoTitle" type="text"/>
                <button>"Add Todo"</button>
            </form>
        </ul>

    )
}

export default TodoForm;