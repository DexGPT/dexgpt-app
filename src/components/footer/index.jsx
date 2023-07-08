import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          dexgpt.app
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default function Footer() {
    return (
        <Box sx={{ p: 6 }} component="footer" style={{position: 'fixed', bottom: '0', width: '100%', color: 'white'}}>
            {/* <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography> */}
            {/* <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography> */}
            <Copyright />
        </Box>
    );
}
