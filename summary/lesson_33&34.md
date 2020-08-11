# 33장 & 34장 
#### 내용
```sh
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
```
- /client/src/_actions/user_action.js

```sh
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

// SpecificComponent : HOC로 감싸줄 component(LandingPage, LoginPage, RegisterPage)
// option : null일 경우 아무나 접근 가능 / true일 경우 로그인한 유저만 접근 가능 / false일 경우 로그인한 유저는 접근 불가능
// adminRoute : admin만이 접근 가능한 component 설정 option
export default function(SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        // backend에 request로 유저 상태를 가져옴 
        const dispatch = useDispatch();

        useEffect(() => {
            // auth라는 action 사용 
            dispatch(auth()).then(response => {
                // option에 따른 분기처리
                // 로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                }
                // 로그인 한 상태 
                else {
                    // 관리자 권한이 없는 상태에서 관리자 페이지에 접근할 경우
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    else {
                        if(!option) {
                            // register 페이지에 접근할 경우
                            props.history.push('/')
                        }
                    }
                }
            })

        }, []);

        return (
            <SpecificComponent />
        )
        /*
            return ( 
                <SpecificComponnts {...props} 
            )
            일 경우 withRouter()를 각 page component에 적용하지 않아도 됨 
        */

    }

    return AuthenticationCheck;
}
```
- /client/src/hoc/auth.js
 
```sh
// HOC에 모든 component를 감싸주기 위해 가져옴 
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <div>
        {
          
        }
        <Switch>
          {/* 
              첫 번째 인자 : Auth라는 이름의 HOC로 Component를 감싸줌
              두 번째 인자 : 접근 권한 option 설정(null / true / false) 
              세 번째 인자 : admin만이 접근 가능한 component 설정
          */}
          <Route exact path="/" component = {Auth(LandingPage, null)} />
          <Route exact path="/login" component = {Auth(LoginPage, false)} />
          <Route exact path="/register" component = {Auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  );
}
```
- /client/src/App.js