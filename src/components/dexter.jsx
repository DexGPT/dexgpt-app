import React from 'react';
import { DexInstance } from '../services/dexter';
import PromptGallery from './dex/promptgallery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './dex/navbar';
import QueryBox from './dex/querybox';

function MainApp(props) {
    
    const defaultTheme = createTheme();
    const dex = new DexInstance();
    const [loading, setLoading] = React.useState(false);

    const [ prompts, setPrompts ] = React.useState(null);
    const [ selectedPrompt, setSelectedPrompt ] = React.useState("Basic Prompt");
    const [ promptGalleryState, setPromptGalleryState ] = React.useState(false);

    const [ errorState, setErrorState ] = React.useState(false);
    
    const [ reply, setReply ] = React.useState("");
    

    if (prompts === null) {
        dex.get_all_prompts().then(
            resp => {
                setPrompts(resp);                
            }
        )
    }

    const openPromptGallery = () => {
        setPromptGalleryState(true);
    }

    const changePrompt = async (prompt_id, prompt_name) => {
        setLoading(true);
        dex.change_prompt(prompt_id).then(
            resp => {
                setPromptGalleryState(false)
                setLoading(false);
            }
        )
    }

    const useCustomPrompt = (prompt_name, prompt_text) => {
        setPromptGalleryState(false);
        setLoading(true);
        dex.change_prompt_text(prompt_text).then(
            resp => {
                setLoading(false);
            }
        )
    }

    const askQuery = async (query) => {
        setLoading(true);
        let response = await dex.ask_query(query)
        setLoading(false);
        if (response?.payload) {
            setReply(response?.payload)
            setErrorState(false);
        } else {
            if (errorState) {
                alert("Seems like your session has expired. reloading session");
                window.location.reload()
            } else {
                setErrorState(true);
            }
        }
    }

    const closePromptGallery = () => {
        setPromptGalleryState(false);
    }

    return (
        <ThemeProvider theme={defaultTheme}>

            <div className={loading ? 'loadingbox': 'loadingbox hidden'}>
                Please Wait ....
            </div>

            {/* Prompt Gallery Model */}
            {   prompts !== null && 
                (   <PromptGallery 
                    open={promptGalleryState} 
                    changePrompt={changePrompt} 
                    useCustomPrompt={useCustomPrompt} 
                    prompts={prompts} 
                    closePrompt={closePromptGallery} 
                    ></PromptGallery>   )
            }

            <Navbar openPromptGallery={openPromptGallery}></Navbar>
            <QueryBox promptName={selectedPrompt} askQuery={askQuery} response={reply}></QueryBox>
            <div className='footer'>
                Dexter is created using OpenAI chatgpt-3.5, ChatGPT may produce inaccurate information about people, places, or facts.
                <br/>
                Resources: <a href="https://github.com/DexGPT/dexgpt.app" target='_blank'>DexGPT</a>, <a href="https://dexgpt.gitbook.io/dexgpt-apis/" target='_blank'>DexGPT API's</a>
            </div>
        </ThemeProvider>
    );
}

export default MainApp;
