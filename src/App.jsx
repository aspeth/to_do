import { useState } from 'react'
import Todo from "./Todo"
import Form from "./Form"

function App() {
  const [todos, setTodos] = useState([{ description: "Learn React", isCompleted: false }, { description: "Eat Lunch", isCompleted: false }])

  console.log({ todos })

  const markComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { description: text, isCompleted: false }]
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <Todo description={todo.description}
          key={index}
          deleteThing={deleteTodo}
          index={index}
          completeThing={markComplete}
          isCompleted={todo.isCompleted}
        />
      ))}
      <Form addTodo={addTodo} />
    </div>
  )
}

export default App
