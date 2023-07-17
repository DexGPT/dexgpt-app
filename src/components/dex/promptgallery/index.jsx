import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Grid } from '@mui/material';
import './index.css'
import CardGallery from './prompts';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

export default function PromptGallery(props) {
  const { open, changePrompt, useCustomPrompt, prompts, closePrompt } = props;
  const [ key, setKey ] = React.useState("");
  const [ showCustomPromptForm, setShowCustomPromptForm] = React.useState(false)

  const [ promptName, setPromptName ] = React.useState("");
  const [ promptText, setPromptText ] = React.useState("");

  const handlePromptName = (event) => {
    setPromptName(event.target.value);
  }

  const handlePromptText = (event) => {
    setPromptText(event.target.value);
  }


  const handleClose = (event) => {
    event.preventDefault();
  }

  const onPromptSelected = async(resp) => {
    changePrompt(resp?.id, resp?.prompt_name)
  }

  const SelectCustomPrompt = async(resp) => {
    useCustomPrompt(promptName, promptText)
  }

  

  return (
    <Dialog
      fullScreen={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={{fontSize: '30px'}} id="alert-dialog-title">        
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <span style={{borderBottom: "2px solid gainsboro", paddingBottom: "20px"}}>Select Prompt</span>
          </Grid>
          <Grid item xs={6} style={{textAlign: 'right'}}>
            {showCustomPromptForm ? (
              <Button style={{marginRight: "20px"}} className='querybtn' variant="contained" onClick={
                () => {
                  setShowCustomPromptForm(false);
                }
              }>
                Back
              </Button>
            ) : (
              <Button style={{marginRight: "20px"}} className='querybtn' variant="contained" onClick={
                () => {
                  setShowCustomPromptForm(true);
                }
              }>
                Create Your Own Prompt
              </Button>
            ) }            
            <Button className='querybtn' color="error" variant="contained" onClick={
              () => {
                closePrompt();
              }
            }>Close</Button>
          </Grid>
        </Grid> 
      </DialogTitle>
      <DialogContent>
        {
          showCustomPromptForm ? (
            <div style={{width:"50%", marginLeft: "25%", marginTop: "5%"}}>
              <Card style={{padding: "15px", background: "rgba(0,0,0,0.02)"}}>
                <h3>Prompt information</h3>
                <TextField 
                  style={{width: '100%'}}  
                  label="Prompt Name" 
                  variant="outlined" 
                  onChange={handlePromptName}
                  value={promptName}
                />
                <TextField 
                  style={{width: '100%', marginTop: "30px"}} 
                  multiline rows={8} 
                  label="Prompt Name" 
                  variant="outlined" 
                  onChange={handlePromptText}
                  value={promptText}
                />
                <Button onClick={
                  () => {
                    SelectCustomPrompt()
                  }
                }  style={{marginTop: "30px"}} color='success' variant="contained">Use Prompt</Button>  
              </Card>                          
            </div>  
          ) : (
            <div style={{width:"70%", marginLeft: "15%"}}>              
              <CardGallery prompts={prompts} onPromptSelected={onPromptSelected}></CardGallery>
            </div>
          )
        }
      
      </DialogContent>
    </Dialog>
  );
}
