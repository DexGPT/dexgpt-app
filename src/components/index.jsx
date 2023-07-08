import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from './footer';
import QueryBox from './querybox';
import Navbar from './navbar';
import OpenAIKeyPrompt from './openaikeyprompt';
import { API } from '../services/apiservices';
import { DexInstance } from '../services/dexter';
import Response from './response';
import CustomPrompt from './custom_prompt';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function MainApp() {
    const [open, setOpen] = React.useState(false);
    const [customPromptStatus, setCustomPromptStatus] = React.useState(false);
    
    const [dex, setDex] = React.useState(new DexInstance());
    const [state, setState] = React.useState(0);
    const [loading, setloading] = React.useState(false);
    const [loadingmsg, setLoadingMsg] = React.useState("Loading ....");

    const [prompts, setPrompts] = React.useState(null);
    const [resp, setResp] = React.useState("")

    const getAllPrompts = async () => {
        let response = await dex.get_all_prompts();
        if(response) setPrompts(response);        
    };

    const init = async() => {
        let resp = await dex.instance_status();        
        setOpen(!resp)
        setState(1);
    }   

    if (state === 0) {
        init();     
    }

    if (prompts === null) {
        getAllPrompts();  
    }

    const submitKey = async(key) => {
        setloading(true);
        await dex.setup(key)
        setOpen(false);
        setloading(false);
    }

    const askQuery = async(query) => {
        setloading(true);
        let response = await dex.ask_query(query)
        setResp(response)
        setloading(false);
    }

    const changePrompt = async(prompt) => {
        setloading(true);
        if (prompt === "custom") {
            setCustomPromptStatus(true);
        } else {
            await dex.change_prompt(prompt)
        }
        setloading(false);
        
    }

    const reset = async(reset) => {
        setResp("")
    }

    const changePromptText = async(text) => {
        await dex.change_prompt_text(text)
        setCustomPromptStatus(false);
    }


    console.log(prompts);
    return (
        <ThemeProvider theme={defaultTheme}>
            <div className={loading ? 'loadingbox': 'loadingbox hidden'}>
                {loadingmsg}
            </div>
            { open !==null && <OpenAIKeyPrompt open={open} submitKey={submitKey} /> }

            { <CustomPrompt  open={customPromptStatus} onSubmit={changePromptText}></CustomPrompt> }
            <CssBaseline />
            {/* Top Navbar for the website */}
            <Navbar prompts={prompts} changePrompt={changePrompt}></Navbar>
                    
            {/* Interface to ask query*/}
            { resp === "" && <QueryBox askQuery={askQuery} resp={resp}></QueryBox> }
            { resp !== "" && <Response reset={reset} resp={resp} ></Response> }
            
            
            {/* Website footer */}
            {/* <Footer></Footer> */}
        </ThemeProvider>
    )
}



// export default function Album() {
//     const [open, setOpen] = React.useState(false);
//     const [loginpromptstatus, setLoginPromptStatus] = React.useState(false)
    
//     const [resp, setResp] = React.useState("")
//     const api = new API("https://api.dexgpt.app");
//     const [loading, setloading] = React.useState(false);
//     const [loadingmsg, setLoadingMsg] = React.useState("Loading ....");
//     const [selectedPrompt, setSelectedPrompt] = React.useState("basic");
//     const [prompts, setPrompts] = React.useState(null);
//     const [dex, setDex] = React.useState(new DexInstance());

//     const GetAllPrompts = async () => {
//         let resp = await api.get("/prompts/")
//         setPrompts(resp.payload);
//     };

//     React.useEffect(() => {
//         if (prompts === null) {
//             GetAllPrompts()
//             let resp = dex.instance_status()
//             setOpen(resp);
//         }
//     })

//     const submitKey = async (key) => {
//         let resp = await api.post("/create/dex/", {
//             "key": key
//         })
//         localStorage.setItem("instance_id", resp.payload.instance_id);
//         window.location.reload();
//     };

//     const askQuery = async(query) => {
//         // socket.send_message(key, query)
//         setLoadingMsg("Dexter is thinking ....")
//         setloading(true);
//         let resp = await api.post("/query/", {
//             instance_id: localStorage.getItem("instance_id"),
//             query: query
//         })
//         setResp(resp.payload);
//         setloading(false)
//         setLoadingMsg("Loading ....")
        
//     }

//     const changePrompt = async(prompt_id) => {
//         setLoadingMsg("Chaning prompt");
//         setLoginPromptStatus(true)
//         let resp = await api.post("/change/prompt/", {
//             instance_id: localStorage.getItem("instance_id"),
//             prompt_id: prompt_id
//         })  
//         setLoadingMsg("loading");
//         setLoginPromptStatus(false)
//     }
    
//     return (
        
//         <ThemeProvider theme={defaultTheme}>
//             <div className={loading ? 'loadingbox': 'loadingbox hidden'}>
//                 {loadingmsg}
//             </div>
//             { open !==null && <OpenAIKeyPrompt open={open} submitKey={submitKey} /> }
//             <CssBaseline />
//             {/* Top Navbar for the website */}
//             <Navbar prompts={prompts} changePrompt={changePrompt}></Navbar>
                    
//             {/* Interface to ask query*/}
//             <QueryBox askQuery={askQuery} resp={resp}></QueryBox>        
            
//             {/* Website footer */}
//             <Footer></Footer>
//         </ThemeProvider>
//     );
// }
