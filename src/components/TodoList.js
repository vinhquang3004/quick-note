import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, setTodos }) => {

    return (
        <div>
            {todos.map(el => (
                <li key={el.id}>
                    <TodoItem
                        todo={el}
                        todos={todos}
                        setTodos={setTodos}
                    />
                </li>
            ))}
        </div>
    )
}

export default TodoList
