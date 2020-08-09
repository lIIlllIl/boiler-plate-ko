import Axios from 'axios';

// reducer로 반환할 type을 types.js에서 가져옴 
import {
    LOGIN_USER,
    REGISTER_USER
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