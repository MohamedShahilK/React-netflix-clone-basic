import axios from "axios";
import {Base_Url} from '../constants/constants'

const instance = axios.create({

  baseURL: Base_Url,

    // baseURL: 'https://some-domain.com/api/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance
