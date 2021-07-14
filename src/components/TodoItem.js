import React from 'react'

const Todo = ({todo,todos, setTodos}) => {
    const todoItemStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
    const handleDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const handleCompleted = () => {
        setTodos(todos.map(el => {
            if (el.id === todo.id){
                //el.completed = !el.completed
                return{...el, completed: !el.completed} // ...el lay tat ca thanh phan trong el, va gan gia tri completed moi
            }
            return el
        }))
    }
    return (
        <div>
            <input style = {todoItemStyle} type="text" value = {todo.title} /* onChange = {(event) => event.preventDefault() } *//>
            <button onClick={handleCompleted}>completed</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Todo
