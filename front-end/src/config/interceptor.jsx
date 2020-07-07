import axios from 'axios';

export const interceptor = axios.interceptors.request.use(async (config) => {            
    config.headers['accept'] = 'application/json';
    config.headers['content-type'] = 'application/json';
    
    return config;       
  }, (error) => {    
    return Promise.reject(error);
});