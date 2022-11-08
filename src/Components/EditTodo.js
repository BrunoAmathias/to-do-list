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

const changeEditedTodo= ()=>{
    editTodo(todo.id, editedTodo)
    handleDialog()
}

  return (
    <div>
      <Dialog
        open={openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editar Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField
          fullWidth
          defaultValue={editedTodo}
          onChange={(e)=> setEditedTodo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog}>Cancelar</Button>
          <Button onClick={changeEditedTodo} >Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}