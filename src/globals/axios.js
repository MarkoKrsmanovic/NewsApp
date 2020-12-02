import axiosImport from 'axios';
import {backendRoot} from './constants/ApiConstants';

export default class axios {
  static instance = null;

  static getInstance() {
    if (axios.instance == null) {
      axios.instance = axiosImport.create({
        baseURL: backendRoot,
      });
    }
    return axios.instance;
  }
}
