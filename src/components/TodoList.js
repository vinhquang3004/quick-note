import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
    //const inputText = inputText
    return (
        <div>
            {todos.map(obj => (
                <Todo key={obj.id} obj={obj} todos={todos} setTodos={setTodos}/>))}
        </div>
    )
}

export default TodoList
