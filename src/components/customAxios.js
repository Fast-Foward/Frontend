import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://10.129.57.184:5000'
});

export default customAxios;
