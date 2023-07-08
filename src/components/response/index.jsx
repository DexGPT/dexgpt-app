import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './index.css'

export default function Response(props) {
    const { resp, reset } = props

    const queryScreen = (
        <>
            <div className='querybox box'>
                <div className='body'>
                    <pre>{resp}</pre>
                    <p style={{textAlign: "center"}}>
                        <Button className='querybtn' variant="contained" onClick={reset}>Reset</Button>            
                    </p>
                    
                </div>
            </div>
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