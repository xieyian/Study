import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5JogpI3GYRgFAOPfuc8vUDfbaUhR3DlHal23CwsUx1w'
    }
});

