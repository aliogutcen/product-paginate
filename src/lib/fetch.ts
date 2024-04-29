import axios, { AxiosResponse } from 'axios';
import instance from './axios';



export const get = async (url: string): Promise<AxiosResponse> => {
    return instance.get(url);
};