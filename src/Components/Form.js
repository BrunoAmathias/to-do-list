import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../Style/Form.style.css'

  const Form = ({changeTodo}) => {

  const[text, setText] = useState('')
  const[id, setId] = useState(0)

 
  
  const todoCreate = ()=>{
    const todoObj = {text : text, id: id}
    setId(id + 1)
    RideUpText(todoObj)
  }
  
  const RideUpText= (text)=>{
      changeTodo(text)
      setText('')}  

  return (
    <div className='form'>
    <TextField 
    fullWidth 
    onChange={(e)=> setText(e.target.value)} 
    id="outlined-basic" 
    label="Escreva" 
    variant="outlined"
    value={text}/>
    <Button 
    onClick={todoCreate}
    variant="outlined">Add</Button>
    </div>
  )
}

export default Form