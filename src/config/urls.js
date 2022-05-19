export const API_BASE_URL = 'http://192.168.100.101:8002/api';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;


export const SIGNUP = getApiUrl("/signup");
export const LOGIN = getApiUrl("/userlogin");
export const EDIT_PROFILE = getApiUrl('/edit_profile');
export const CHANGE_PASSWORD = getApiUrl('/change_password');
export const IMAGE_UPLOAD = getApiUrl("/img_upload");
export const POST_SEND = getApiUrl("/post_send");
export const POST = getApiUrl("/posts");
export const LIKE_POST = getApiUrl("/like-post");
export const COMMENT_POST = getApiUrl("/comment-post");
