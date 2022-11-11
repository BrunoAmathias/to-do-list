import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodo({openEdit, handleDialog, todo, editTodo}) {

const [editedTodo, setEditedTodo] = React.useState(todo.text)
const [validateError, setValidateError] = React.useState(false)


const changeEditedTodo= (e)=>{
    e.preventDefault()
    if(editedTodo.length > 0){
      editTodo(todo.id, editedTodo)
      handleDialog()
      setValidateError(false)
    }else{
      setValidateError(true)
    }
}

  return (
    <div>
      <Dialog
        open={openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description">
        <form action="">
        <DialogTitle>{"Editar Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField
          error={validateError ? true : false}
          fullWidth
          defaultValue={editedTodo}
          onChange={(e)=> setEditedTodo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog}>Cancelar</Button>
          <Button type='submit' onClick={changeEditedTodo} >Ok</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}