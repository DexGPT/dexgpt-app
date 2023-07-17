import React, { useContext } from 'react';
import { HomePage } from './homepage/homepage';

function ContinuePage(props) {

    return (
        <HomePage createInstance={createInstance}></HomePage>
    );
}

export default ContinuePage;
