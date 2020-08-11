import Axios from 'axios';

// reducer로 반환할 type을 types.js에서 가져옴 
import {
    LOGIN_USER,
    REGISTER_USER, 
    AUTH_USER
} from './types';

// axios를 통해 server와 통신하는 역할을 담당하는 action 
// dataToSubmit : body를 통해 전달한 email, password 
export function loginUser(dataToSubmit) {


    // 서버의 로그인 라우터의 반환값(response.data)를 request에 저장 
    const request = Axios.post('/api/users/login', dataToSubmit)
                         .then(response => response.data)

    // action에서 다룬 데이터를 Reducer로 반환(전달)                 
    return {
        type : LOGIN_USER,
        payload : request
    }
}

// axios를 통해 server와 통신하는 역할을 담당하는 action 
// dataToSubmit : body를 통해 전달한 email, password, name, confirm password  
export function registerUser(dataToSubmit) {
    // 서버의 로그인 라우터의 반환값(response.data)를 request에 저장 
    const request = Axios.post('/api/users/register', dataToSubmit)
                         .then(response => response.data)

    // action에서 다룬 데이터를 Reducer로 반환(전달)                 
    return {
        type : REGISTER_USER,
        payload : request
    }
}

// axios를 통해 server와 통신하는 역할을 담당하는 action 
// node.js로부터 로그인한 유저의 정보를 가져오는 function 
// get method이므로 추가로 전송할 데이터(request message의 body)는 필요하지 않음 
export function auth() {
    // 서버의 로그인 라우터의 반환값(response.data)를 request에 저장
    // Axios.get이므로 HTTP 메세지의 body 부분은 존재하지 않음  
    const request = Axios.get('/api/users/auth')
                         .then(response => response.data)

    // action에서 다룬 데이터를 Reducer로 반환(전달)                 
    return {
        type : AUTH_USER,
        payload : request
    }
}