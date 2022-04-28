export const API_BASE_URL = 'http://192.168.100.101:8002/api';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const SIGNUP = getApiUrl("/signup");
export const LOGIN = getApiUrl("/userlogin");