import React from 'react'

const Todo = ({obj, todos ,setTodos}) => {
    const handleClick = () => {
        setTodos(todos.filter(el => el.id !== obj.id))
    }
    return (
        <div>
            <p>{obj.title}</p>
            <input type="button" value="delete" onClick={handleClick}/>
        </div>
    )
}

export default Todo
