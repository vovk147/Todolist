import "./TodoForm.scss"
import { useState } from "react"

const TodoForm = ({ setTodos }) => {
    const [inpValue, setInpValue] = useState("")

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (inpValue.trim() === "") return; 

        const capitalizedValue = capitalizeFirstLetter(inpValue.trim());
        setTodos(prev => [...prev, { id: Date.now(), txt: capitalizedValue }])
        setInpValue("");
    }

    return (
        <form className="todo__form" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={inpValue}
                onChange={(event) => setInpValue(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}



export default TodoForm;
