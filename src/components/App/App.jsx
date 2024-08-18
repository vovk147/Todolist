import "./App.scss"
import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/TodoList"
import { useState, useEffect } from "react"
import { getLocalStorage, setLocalStorage } from "../../utils/localcStorage"

const App = () => {
    const [todos, setTodos] = useState(getLocalStorage("test-todos", []))

    useEffect(() => {
        setLocalStorage("test-todo", todos)
    }, [todos])

    return (
        <main id="home">
            <div className="todo">
                <h1>To-Do List</h1>
                <TodoForm setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </main>
    )

}


export default App