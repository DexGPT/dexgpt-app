import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import './index.css'

export default function QueryBox(props) {
    const { askQuery } = props
    const [query, setQuery] = React.useState("");
  
    
    const handleTextInput = (event) => {        
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        askQuery(query);
    }

    const queryScreen = (
        <>
            <div className='querybox box'>
                <div className='heading'>
                    Dexter is ready to help
                </div>
                <div className='body'>
                    <TextField
                        className='querytextbox'
                        id="outlined-multiline-static"
                        value={query}
                        multiline
                        rows={4}
                        onChange={handleTextInput}
                        placeholder='Ask me anything !!!!!'
                    />     
                    <Button className='querybtn' variant="contained" onClick={handleSubmit}>Answer Me</Button>
              
                </div>
            </div>
            
            {/* </Stack> */}
        </>
    )

    return (
        <main>
            <Box sx={{ pt: 8, pb: 6, color: 'white'}}>
                <Container>
                    { queryScreen }
                </Container>
            </Box>
        </main>
    )
}