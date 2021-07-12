import React, { useState } from 'react'
import TodoList from './TodoList'

const Form = () => {
    const [todos, setTodos] = useState([])
    const [inputText, setinputText] = useState("")

    const handleChange = (e) => {
        setinputText(e.target.value)
        console.log(inputText)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: Math.random() * 100, title: inputText, completed: false }])
        setinputText("")
    }

    return (
        <form >
            <input type="text" placeholder="add todo" value={inputText} onChange={handleChange} />
            <input type="submit" value="Add" onClick={handleSubmit} />
            {/* <TodoList title={todos.title} setTodos={setTodos} /> */}

            <TodoList todos={todos} setTodos={setTodos} />
        </form>
    )
}

export default Form
