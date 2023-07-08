import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function CustomPrompt(props) {
  const { open, onSubmit } = props;
  const [ key, setKey ] = React.useState("");

  const handleTextInput = (event) => {
    setKey(event.target.value);
  }

  const handleClose = (event) => {
    event.preventDefault();
  }
  
  const changePrompt = () => {
    onSubmit(key);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Personalize your AI Assistant
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Add your prompt text, to know more about prompts you can read it on <a target='_blank' href="https://js.langchain.com/docs/modules/prompts">lanchain - prompts</a>
        </DialogContentText>

        <DialogContentText id="alert-dialog-description" style={{marginTop: '20px', marginBottom: '20px'}}>
          
          Example: Make you own custom AI assistant, a prompt will determine how dexter works. It can be a tanslator or a math teacher.
        </DialogContentText>
        <TextField
          onChange={handleTextInput}
          value={key}
          className='queryBox'
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder='Dexter takes input and returns the translation in Hindi'
          />
      </DialogContent>

      
      <DialogActions>
        <Button onClick={changePrompt} color="primary" style={{marginRight: '20px'}}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
