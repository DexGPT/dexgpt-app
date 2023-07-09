import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function CardGallery(props) {
  const { onPromptSelected, useCustomPrompt, prompts } = props
  // Sample data
  const cards = prompts;
  return (
    <Grid container spacing={2} style={{padding: "20px"}}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{margin: "15px"}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.prompt_name}
              </Typography>
              <Typography variant="body2">
                {card.prompt_text.length > 100 ? card.prompt_text.substring(0, 150) + "..." : card.prompt_text}

              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginTop: "30px", textAlign: 'right'}}>
                last updated on {card.updated_on.replace("T", " ").split(" ")[0]}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginTop: "-30px", textAlign: 'left'}}>
                <Button className='querybtn' variant="contained" onClick={
                  () => {
                    onPromptSelected(card);
                  }
                }>Select Prompt</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

        <Grid item xs={12} sm={6} md={4} key={"custom"}>
          <Card onClick={useCustomPrompt} style={{margin: "15px"}}>
            <CardContent style={{textAlign: 'center'}}>
              <Typography variant="h5" component="div">
                Write your own
              </Typography>
              <AddBoxIcon className='plusicon'/>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  );
}
