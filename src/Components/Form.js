import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Style/Form.style.css'
import AlertSuccessOrError from './AlertSuccessOrError'
const localId = 'localId'
const localTodos = 'Todos'


  const Form = ({changeTodo, todo}) => {

  const[text, setText] = useState('')
  const[id, setId] = useState(0)
  const[validateError, setValidateError] = useState(false)
  const[openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const[openAlertError, setOpenAlertError] = useState(false);


 
  
  const todoCreate = (e)=>{
    e.preventDefault()
    if(text.length > 0){
        const todoObj = {text : text, id: id, done: false}
        setId(id + 1)
        RideUpText(todoObj)
        setValidateError(false)
        setOpenAlertSuccess(true)
    }else{
        setValidateError(true)
        setOpenAlertError(true)
        console.log(openAlertError);
    }
  
  }

  const RideUpText= (text)=>{
      changeTodo(text)
      setText('')}  


  useEffect(()=>{
    const arraysId = JSON.parse(localStorage.getItem(localId)) 
    if(arraysId){
      setId(arraysId)
      console.log(arraysId);
    }
  },[])
    
  useEffect(()=>{
    localStorage.setItem(localId, JSON.stringify(id))
  },[id])

  

return (
  <>
  <AlertSuccessOrError openAlertError={openAlertError} setOpenAlertError={setOpenAlertError} openAlertSuccess={openAlertSuccess} setOpenAlertSuccess={setOpenAlertSuccess} />
  <form action='' className='form'>
    <TextField
      error={validateError ? true : false}
      fullWidth 
      onChange={(e)=> setText(e.target.value) } 
      id="outlined-basic" 
      label='Escreva'
      variant="outlined"
      value={text}
      className='error'/>
    <Button 
      type='submit'
      onClick={todoCreate}
      variant="outlined">
        Add</Button>
  </form>
  </>
  )
}

export default Form