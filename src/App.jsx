import { useState, useEffect } from 'react'

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

const Todo = ({ description, deleteThing, index, completeThing, isCompleted }) => {
  useEffect(() => {
    console.log("Imaneffect")
  }, [])
  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <h2>{description}</h2>
      <button onClick={() => deleteThing(index)}>Delete</button>
      <button onClick={() => completeThing(index)}>Mark Complete</button>
    </div>
  )
}

// TODO: add a button
const Form = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const submit = (event) => {
    event.preventDefault();
    if (!value) {
      return
    }
    addTodo(value)
    setValue("")
  }
  return (
    <form onSubmit={submit}>
      <h2>New Todo</h2>
      <input type="text"
        className="todoinput"
        value={value}
        placeholder="Thing to do"
        onChange={(event) => setValue(event.target.value)} />
    </form>
  )
}

export default App
