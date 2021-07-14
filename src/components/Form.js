import React, { Fragment } from 'react'
import TodoList from './TodoList'

const Form = ({ input, setInput, todos, setTodos }) => {
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, { id: Math.random() * 100, title: input, completed: false }])
        setInput("")
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="input todo" value={input} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
            <TodoList
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
            />
        </Fragment>


    )
}

export default Form
