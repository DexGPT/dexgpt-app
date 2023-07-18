import React, { useContext, useEffect } from 'react';
import './index.css'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

export function HomePage(props) {
    const { createInstance } = props
    const [ key, setKey ] = React.useState("");
    const [ loading, setLoading ] = React.useState(false);

    const handleTextInput = (event) => {
      setKey(event.target.value);
    }

    const _createInstance = () => {
        createInstance(key);
    }

    return (
        <div className='home'>
            <h1 className='heading'>Dex GPT</h1>
            <h5 className='subheading'>Your Custom AI Assistant!</h5>
            <p className='description'>
                DexGPT democratizes the power of AI, empowering you to create your own personalized digital assistant without any coding. You can customize OpenAI's language model with available or custom written prompts to shape its behavior, creating a truly individualized AI companion. DexGPT brings the future of digital assistance to your fingertips. Embrace the power of personalized AI with DexGPT.
                <br/><br/><br/>
                Lets start by setting up Base LLM Model. Currently we are using Open AI ChatGPT 3.5 as base Model. Input you open AI key to get started.
                <br/><br/>
            </p>
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                        <TextField
                            style={{background: "white", width: "100%"}}
                            onChange={handleTextInput}
                            value={key}
                            className='openAIKey'
                            id="outlined-multiline-static"
                            placeholder='Your Open AI Key.'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={_createInstance} disabled={loading} className='btnSetup' variant="contained">Setup</Button>
                    </Grid>
                </Grid>
            </div>     
            <p className='description'>
                <br/><br/> <br/><br/>
                If you haven't already, you will need to acquire an OpenAI API key to kickstart this adventure from <a className='link' target='_blank' href="https://platform.openai.com/account/api-keys">Open AI Dashboard</a>. Don't worry, it's super easy!
            </p>
        </div>
    );
}
