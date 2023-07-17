import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import './index.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function QueryBox(props) {
    const { askQuery, response, promptName } = props
    const [query, setQuery] = React.useState("");
  
    
    const handleTextInput = (event) => {        
        setQuery(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // prevent a new line from being made
          askQuery(query);
          // handle Enter key press here
        }
      }

    const handleSubmit = () => {
        askQuery(query);
    }

    

    const queryScreen = (
        <>
            <div className='querybox box'>
                <div className='heading'>
                    DexGPT
                </div>
                <div className='slogan'>
                    Powerful AI Assistant created to help you with your questions.
                </div>
                <div className='body'>
                    <div className='responseholder'>
                        <pre>
                            { response !== "" ? response : promptName + " working ..."}
                        </pre>
                    </div>
                    <div data-gramm="false" className='query-text-area'>
                        <textarea onKeyDown={handleKeyDown} rows={3} value={query} onChange={handleTextInput} className='querytextbox' placeholder='Dexter speaks about space, anything apart from it he reply back IDK'>
                            
                        </textarea>
                        <div style={{textAlign: "right"}}>
                            <button className='querybtn' onClick={handleSubmit}>
                                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                            </button>
                            {/* <Button className='querybtn' variant="contained" onClick={handleSubmit}>Answer Me</Button>             */}
                        </div>                        
                    </div>

                    <div className='footer'>
                        Dexter is created using OpenAI chatgpt-3.5, ChatGPT may produce inaccurate information about people, places, or facts.
                        <br/>
                        Resources: <a href="https://github.com/DexGPT/dexgpt.app" target='_blank'>DexGPT</a>, <a href="https://dexgpt.gitbook.io/dexgpt-apis/" target='_blank'>DexGPT API's</a>
                    </div>
              
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