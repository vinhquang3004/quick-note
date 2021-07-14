import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  return (
    <div>
      <Form
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      
    </div>
  );
}

export default App;
