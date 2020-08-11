// react에서 state 관리를 위해 useState를 가져옴 
import React, { useState } from 'react';

// redux를 사용하기 위해 useDispatch를 가져옴 
import { useDispatch } from 'react-redux';

// loginUser reducer를 가져옴 
import { loginUser } from '../../../_actions/user_action';

// props.history가 undefined가 되지 않도록 router로 감싸줌 
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
    // redux의 action을 생성하기 위해 dispatch를 생성 
    const dispatch = useDispatch();

    // email 정보를 관리하기 위한 email 전용 state
    // 초기값은 null string  
    const [Email, setEmail] = useState("");

    // password 정보를 관리하기 위한 password 전용 state 
    // 초기값은 null string 
    const [Password, setPassword] = useState("");

    // onChange를 통해 email state를 변경하도록 하는 function 
    const onEmailHandler = (event) => {
        // email onChange event가 binding된 input의 값을 추출해 email state에 대입 
        setEmail(event.currentTarget.value);
    }

    // onChange를 통해 password state를 변경하도록 하는 function 
    const onPasswordHandler = (event) => {
         // password onChange event가 binding된 input의 값을 추출해 password state에 대입 
        setPassword(event.currentTarget.value);
    }

    // input에 입력한 email과 password 
    const onSubmitHandler = (event) => {
        // event의 확산(진행)을 정지시킴
        // form의 경우 onSubmit() event를 통해 submit을 실행하면 이벤트 완료 후 곧장 refresh가 되기 때문에 
        // react와 같은 SPA에서는 원하는 이벤트를 처리할 수 없기 때문에 event의 진행을 정지시킴
        event.preventDefault();

        // server에 input에 입력한 email과 password를 전달하기 위한 객체 body 명시 생성 
        let body = {
            email : Email, 
            password : Password
        };

        // loginUser라는 action을 통해 reducer에 데이터를 전달하고자 함 
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    // 로그인 성공 시 페이지 이동
                    props.history.push('/');
                }
                // 로그인 실패 시 
                else {
                    alert('Error');
                }
            });
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                  onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler} />

                <br />
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);