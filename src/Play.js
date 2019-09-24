import React, { useState, useEffect } from 'react';

import { USERNAME, PASSWORD } from './config.js';

const Play = () => {
    const [data, setData] = useState({ data: [] });
    useEffect(() => {
        fetch(
            'https://apirest.wyscout.com/v2/seasons/185730/matches',
            {  
                headers: {
                    // Authentication: `Basic  ${btoa(`${USERNAME}:${PASSWORD}`).toString('base64')}`,
                    Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`).toString('base64')}`,
                },
            }
        )
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        
    }, []);

    return <h1>Play</h1>;
};

export default Play;