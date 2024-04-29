import axios from 'axios';
import { global } from './global';

const instance = axios.create({
    baseURL: global.api_url,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;

