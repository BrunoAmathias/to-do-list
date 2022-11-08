import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoItem from './Components/TodoItem';


function App() {

const [todo, setTodo] = useState([])

function changeTodo(text){
  setTodo([...todo, text])
}

const deletedTodo = (id) => {
  const filteredTodo = todo.filter((todo)=> todo.id !== id)
  setTodo(filteredTodo)
}

const editTodo = (id, editedTodo)=>{
  var todosArray = [...todo]

  for(var i in todosArray){
    if(todosArray[i].id === id){
      todosArray[i].text = editedTodo
    }
  }
  setTodo(todosArray)
}



  return (
    <Paper className='paper' >
    <Container >
    <Form changeTodo={changeTodo}  fullWidth/>
    {todo.map((todo)=>(
      <TodoItem key={todo.id} editTodo={editTodo} deletedTodo={deletedTodo} todo={todo} fullWidth/>
    ))}
    </Container>
    </Paper>
  )
}

export default App;
