import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoItem from './Components/TodoItem';
const localTodos = 'Todos'

function App() {
  
  
const arraysTodo = JSON.parse(localStorage.getItem(localTodos) || '[]' ) 

const [todo, setTodo] = useState(arraysTodo)

const changeTodo = (text)=>{
  setTodo([...todo, text])
}

const deletedTodo = (id) => {
  const filteredTodo = todo.filter((todo)=> todo.id !== id)
  setTodo(filteredTodo)
}

function changeDone( done ,id){
  let updatedDone = todo.map(it =>{
    if(it.id === id){
      it.done = !it.done
    }
  return it
})



setTodo(updatedDone) 
console.log(todo);
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


// useEffect(()=>{
//   const arraysTodo = JSON.parse(localStorage.getItem(localTodos)) 
//   if(arraysTodo){
//     setTodo(arraysTodo)
//   }
// },[])

useEffect(()=>{
  localStorage.setItem(localTodos, JSON.stringify(todo))
  },[todo])


  return (<>
    <Paper className='paper' >
      <Container>
        <Form changeTodo={changeTodo} todo={todo} fullWidth/>
        {todo.map((todo)=>(
          <TodoItem key={todo.id} changeDone={changeDone} editTodo={editTodo} deletedTodo={deletedTodo} setTodo={setTodo} todo={todo} fullWidth/>
      ))}
      </Container>
    </Paper>
    </>
  )
}

export default App;
