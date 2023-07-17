import { DexInstance } from '../services/dexter';
import React from 'react';
import MainApp from './dexter';
import { HomePage } from './homepage/homepage';

export default function DexApp(props) {    
    const [appState, setAppState] = React.useState(false);

    const createInstance = async (key) => {
        new DexInstance().setup(key).then(
            (resp) => {
                setAppState(true);
            }
        )
    }

    return (
        appState ? <MainApp></MainApp> : <HomePage createInstance={createInstance}></HomePage>
    )
}