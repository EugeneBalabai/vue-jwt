import axios from 'axios';
import auth from './auth';

const HTTP = axios.create({
  baseURL: `${process.env.API_HOST}:${process.env.API_PORT}${process.env.API_BASE_PATH}`
})

HTTP.interceptors.request.use(config => {
  const token = auth.getToket();
  const tempConfig = config;
  if (token) {
    tempConfig.headers.Authorization = `JWT ${token}`
  }
  return tempConfig
}, error => Promise.reject(error))

HTTP.interceptors.response.use(undefined, error => {
  if (error.response) {
    const {
      response: {
        status
      }
    } = error
    if (status === 401) {
      auth.logout()
    }
  }
  return Promise.reject(error)
})

export default HTTP
