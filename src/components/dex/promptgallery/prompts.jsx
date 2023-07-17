import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function CardGallery(props) {
  const { onPromptSelected, prompts } = props
  // Sample data
  const cards = prompts;
  return (
    <Grid container spacing={2} style={{padding: "20px"}}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={12} md={12} key={index}>
          <Card style={{margin: "15px", background: "rgba(0,0,0,0.02)"}}>
            <CardContent>
              <Grid container style={{marginBottom: "20px"}}>
                <Grid item xs={9} sm={9} md={9}>
                  <Typography variant="h5" component="div">
                    {card.prompt_name}
                  </Typography>                  
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{textAlign:'right'}}>
                  <Button color='success' className='querybtn' variant="contained" onClick={
                    () => {
                      onPromptSelected(card);
                    }
                  }>Select Prompt</Button>
                </Grid>
              </Grid>
              <Typography variant="body2">
                { card.prompt_text }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}        
    </Grid>
  );
}
