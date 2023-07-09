import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import CardGallery from './prompts';

export default function PromptGallery(props) {
  const { open, changePrompt, useCustomPrompt, prompts } = props;
  const [ key, setKey ] = React.useState("");

  const handleTextInput = (event) => {
    setKey(event.target.value);
  }

  const handleClose = (event) => {
    event.preventDefault();
  }

  const onPromptSelected = async(resp) => {
    changePrompt(resp?.id, resp?.prompt_name)
  }

  return (
    <Dialog
      maxWidth={'60vw'}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={{fontSize: '30px'}} id="alert-dialog-title">Select Prompt</DialogTitle>
      <DialogContent>
        <CardGallery prompts={prompts} useCustomPrompt={useCustomPrompt} onPromptSelected={onPromptSelected}></CardGallery>
      </DialogContent>
    </Dialog>
  );
}
