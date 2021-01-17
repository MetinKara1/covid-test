/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {responseMessages} from '../utils';
// import { getServiceOrigin } from '../origins';

const instance = axios.create({
  baseURL: `https://localhost:44390/`, // ${getServiceOrigin()}
  // baseURL: 'http://api.tys.medyasoft-innolab.com/',
  headers: {
    'Content-Type': 'application/json',
    // 'Accept-Language': getLanguage()
  },
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p);
        }
      } else if (params[key] !== null && params[key] !== undefined)
        searchParams.append(key, param);
    }
    return searchParams.toString();
  },
});

class Response {
  data;

  messages;

  status;

  statusCode;

  constructor(data, messages, status, statusCode) {
    this.data = data;
    this.messages = messages;
    this.status = status;
    this.statusCode = statusCode;
  }
}

const requestSuccess = config => {
  const configure = config;
  const ACCESS_TOKEN = localStorage.getItem('access_token');
  if (ACCESS_TOKEN && ACCESS_TOKEN !== '' && ACCESS_TOKEN.length > 0) {
    configure.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  }
  return configure;
};

const requestError = error => Promise.reject(error);

const responseSuccess = response => {
  return new Response(response.data, response.messages, response.status, true);
};

const responseError = error => {
  const originalRequest = error.config;
  if (
    !error.response ||
    (error.response.status === 401 && !originalRequest._retry)
  ) {
    // responseMessages('error', [
    //   {
    //     Message: error.message
    //   }
    // ]);
    return Promise.reject(error);
  }
  if (
    error.response.data &&
    error.response.status !== 403 &&
    error.response.data.Errors
  ) {
    error.response.data.Errors.map(x => {
      responseMessages('error', [
        {
          Message: x.Description,
        },
      ]);
      return '';
    });
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(requestSuccess, requestError);
instance.interceptors.response.use(responseSuccess, responseError);

export default instance;
