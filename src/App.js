import React, { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToDos />
          <a
            className="App-link"
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Hooks
          </a>
        </header>
      </div>
    )
  }
}

const ToDos = ()=> {
  const [ todos, setTodos ] = useState([])
  const toggleTodos = i => setTodos(
    todos.map(
      (todo, k) =>
        k === i
          ? {
            ...todo,
            complete: !todo.complete
          }
          : todo
    )
  )

  return (
    <div>
      <Form onSubmit={text => setTodos([{ text,complete: false }, ...todos])}/>
      {
        todos.map(({text, complete},i)=> (
            <div key={i} onClick={()=> toggleTodos(i)}
              className="App-link"
              style={{ textDecoration: complete ? 'line-through': '' }}>
              { text }
            </div>
          )
        )
      }
      <button onClick={()=> setTodos([])}> reset </button>
    </div>
  )
}

export default App
