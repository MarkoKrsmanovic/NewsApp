import axiosImport from 'axios';
import {backendRoot, apiKey} from './constants/ApiConstants';

export default class axios {
  static instance = null;

  static getInstance() {
    if (axios.instance == null) {
      axios.instance = axiosImport.create({
        baseURL: backendRoot,
      });
      axios.instance.interceptors.request.use(
        (config) => {
          config.params['apiKey'] = apiKey;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        },
      );
    }

    return axios.instance;
  }
}
