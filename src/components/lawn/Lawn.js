import React from 'react';
import { Sky, Ground, Background } from './LawnComponents';

function Lawn(props) {
    return (
        <Background>
            <Sky />
            <Ground>
                {props.children}
            </Ground>
        </Background>
    );
}

export default Lawn;