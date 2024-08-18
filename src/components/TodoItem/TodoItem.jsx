import "./TodoItem.scss"

const TodoItem = ({ todo, todoArray, setTodos }) => {

    const removeHandler = () => {
        let newTodoArray = todoArray.filter(el => el.id != todo.id)
        setTodos(newTodoArray)
    }

    return (
        <div className="todo__list-item" id={todo.id}>
            <p>{todo.txt}</p>
            <button onClick={removeHandler}>Delete</button>
        </div>
    )
}

export default TodoItem