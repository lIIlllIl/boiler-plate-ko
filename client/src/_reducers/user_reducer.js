// reducer로 반환할 type을 types.js에서 가져옴 

import {
    LOGIN_USER
} from '../_actions/types';

// state : 이전 state 
// action : state를 처리하는 action 
export default function(state = {}, action) {
    // 각 라우터에 따른 다양한 type이 오기 때문에 switch문으로 처리
    // action에서 데이터를 조작한 뒤 return으로 어떠한 기능을 수행했는지 명시하는 type과 수행 결과인 request를 reducer에 return하므로 action.type로 접근 
    switch (action.type) {
        case LOGIN_USER :
            // ...state : predleOperator로 이전 state를 그대로 가져옴 
            // 이전 state는 빈( {} ) 상태
            // action.playload = 서버(node.js)의 로그인 라우터에서 반환한 response { loginSuccess: true, userId: user._id }를 loginSuccess에 저장 
            return { ...state, loginSuccess : action.payload }
            break;
        default:
            return state;
    }
}