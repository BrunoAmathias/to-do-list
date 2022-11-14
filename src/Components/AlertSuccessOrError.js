import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSuccessOrError({openAlertSuccess, setOpenAlertSuccess, setOpenAlertError, openAlertError, validateError}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
      setOpenAlertSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      setOpenAlertError(false)
      return;
    }
      setOpenAlertError(false);
  };

  return (
  <>
    <Snackbar open={openAlertError} autoHideDuration={1000} onClose={handleCloseError} >
      <Alert onClose={handleClose} variant="outlined" severity="error">Dados insuficientes !</Alert>
    </Snackbar> 
    <Snackbar open={openAlertSuccess} autoHideDuration={1000} onClose={handleClose} >
      <Alert onClose={handleClose} variant="outlined" severity="success">Tarefa adicionada com sucesso !</Alert>
    </Snackbar>
</>
  );
}