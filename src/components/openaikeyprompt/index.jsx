import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function OpenAIKeyPrompt(props) {
  const { open, submitKey } = props;
  const [ key, setKey ] = React.useState("");

  const handleTextInput = (event) => {
    setKey(event.target.value);
  }

  const handleClose = (event) => {
    event.preventDefault();
  }
  
  const setOpenAIKey = () => {
    submitKey(key);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Welcome to DexGPT"}</DialogTitle>
      <DialogContent>
        {
          
        }
        <DialogContentText id="alert-dialog-description">
          Embrace the magic of DexGPT! Powered by OpenAI's GPT-3, DexGPT employs the innovative strategy of Prompt Engineering to transform your query into a detailed task list, ready for execution on your system with just one click. Immerse yourself in this cutting-edge AI experience and see how much simpler life can be.
        </DialogContentText>

        <DialogContentText id="alert-dialog-description" style={{marginTop: '20px', marginBottom: '20px'}}>
          If you haven't already, you will need to acquire an OpenAI API key to kickstart this adventure from <a target='_blank' href="https://platform.openai.com/account/api-keys">Open AI Dashboard</a>. Don't worry, it's super easy!
        </DialogContentText>

        <DialogContentText id="alert-dialog-description" style={{marginTop: '20px'}}>
          Please enter your OpenAI key and let the journey begin!
        </DialogContentText>
        <TextField
          onChange={handleTextInput}
          value={key}
          className='queryBox'
          id="outlined-multiline-static"
          placeholder='Your Open AI Key.'
          />
      </DialogContent>

      
      <DialogActions>
        <Button onClick={setOpenAIKey} color="primary" style={{marginRight: '20px'}}>
          Activate Agent
        </Button>
      </DialogActions>
    </Dialog>
  );
}
