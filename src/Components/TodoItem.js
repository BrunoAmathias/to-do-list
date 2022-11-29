import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Style/Form.style.css'
import EditTodo from './EditTodo'

export default function TodoItem({todo, changeDone, deletedTodo, editTodo}) {
 
const [openEdit, setOpenEdit] = React.useState(false);

const handleDialog=()=>{
    setOpenEdit(!openEdit)
}


const rideUpTodoID = () =>{
  deletedTodo(todo.id);
}

const rideUpTodoDone = () =>{
  changeDone(todo.done, todo.id)
}


  return (
    <>
   <EditTodo editTodo={editTodo} todo={todo} handleDialog={handleDialog} openEdit={openEdit} />
    <List>
      {[0].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return ( 
          <ListItem
            key={value}
            secondaryAction={
              <DeleteIcon className='iconDelete' onClick={rideUpTodoID} edge="end" aria-label="comments">
                <CommentIcon />
              </DeleteIcon>
            }
            disablePadding
          >
            <ListItemButton >
              <ListItemIcon>
                <Checkbox
                  checked={todo.done}
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={rideUpTodoDone}
                />
              </ListItemIcon>
              <ListItemText onClick={handleDialog}  primary={todo.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}