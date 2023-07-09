import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import './index.css'
import { Button, MenuItem, Select } from '@mui/material';

export default function Navbar(props) {
  const { openPromptGallery } = props

  return (
    <AppBar position="relative" style={{background: '#4B91F1!important'}}>
      <Toolbar>
        <Typography className="appname" variant="h6" color="inherit" noWrap>
          <img src="logo.png" style={{height: "55px", marginTop: "10px"}}/>
        </Typography>

        <div className='actions'>                 
          <Button color={"success"} className='querybtn' variant="contained" onClick={openPromptGallery}>Change Prompt</Button>   
        </div> 
      </Toolbar>
    </AppBar>
  )
}