import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import './index.css'
import { Button, MenuItem, Select } from '@mui/material';

export default function Navbar(props) {
  const { changePrompt, prompts } = props
  const [prompt, setPrompt] = React.useState(1);
  const arr = []
  const handlePromptChange = (event) => {     
      setPrompt(event.target.value);
      changePrompt(event.target.value)
  };


  return (
    <AppBar position="relative" style={{background: '#4B91F1!important'}}>
      <Toolbar>
        <Typography className="appname" variant="h6" color="inherit" noWrap>
          <img src="logo-no-background.png" style={{height: "35px"}}/>
        </Typography>

        <div className='actions'>
            <span>Select Prompt </span>
            <Select
                className="selection prompt"
                value={prompt}
                onChange={handlePromptChange}>                  
                  {                    
                    prompts != null && prompts.map((prompt) => {
                      return (
                        <MenuItem value={prompt.id} key={prompt.id}>{prompt.prompt_name}</MenuItem>
                      )
                    })
                  }
                  <MenuItem value={'custom'} key={'custom'}>Custom Prompt</MenuItem>
            </Select>
        </div> 
      </Toolbar>
    </AppBar>
  )
}