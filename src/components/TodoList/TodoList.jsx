import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.scss"

const TodoList = ({ todos,setTodos }) => {

    return (
        <div className="todo__list">
        {
            todos && todos.length > 0 ? 
            todos.map((todo,index) => {
                return (<TodoItem todo={todo} key={index}  todoArray={todos} setTodos={setTodos} />)
            }) : "Todos is empty"
        }
        </div>
    )

}

export default TodoList