// react에서 state 관리를 위해 useState를 가져옴 
import React, { useState } from 'react';

// redux를 사용하기 위해 useDispatch를 가져옴 
import { useDispatch } from 'react-redux';

//  registerUser reducer를 가져옴 
import { registerUser } from '../../../_actions/user_action';

// props.history가 undefined가 되지 않도록 router로 감싸줌 
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();

    // email 정보를 관리하기 위한 email 전용 state
    // 초기값은 null string  
    const [Email, setEmail] = useState("");

    // password 정보를 관리하기 위한 password 전용 state 
    // 초기값은 null string 
    const [Password, setPassword] = useState("");

    // name 정보를 관리하기 위한 password 전용 state 
    // 초기값은 null string 
    const [Name, setName] = useState("");

    // confirm password 정보를 관리하기 위한 password 전용 state 
    // 초기값은 null string 
    const [ConfirmPassword, setConfirmPassword] = useState("");

    // onChange를 통해 email state를 변경하도록 하는 function 
    const onEmailHandler = (event) => {
        // email onChange event가 binding된 input의 값을 추출해 email state에 대입 
        setEmail(event.currentTarget.value);
    }

    // onChange를 통해 name state를 변경하도록 하는 function 
    const onNameHandler = (event) => {
        // name onChange event가 binding된 input의 값을 추출해 email state에 대입 
        setName(event.currentTarget.value);
    }

    // onChange를 통해 confirm password state를 변경하도록 하는 function
    const onPasswordHandler = (event) => {
        // confirm password onChange event가 binding된 input의 값을 추출해 email state에 대입 
        setPassword(event.currentTarget.value);
    }

    // onChange를 통해 confirm password state를 변경하도록 하는 function
    const onConfirmPasswordHandler = (event) => {
        // confirm password onChange event가 binding된 input의 값을 추출해 email state에 대입 
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        // event의 확산(진행)을 정지시킴
        event.preventDefault();

        // password와 confirm password가 일치해야만 회원가입이 진행되어야 함 
        if(Password !== ConfirmPassword) {
            // 다를 경우 경고창 출력 
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        }

        let body = {
            email : Email, 
            password : Password,
            name : Name
        };

        // registerUser라는 action을 통해 reducer에 데이터를 전달하고자 함 
        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    // 페이지 이동
                    props.history.push('/');
                }
                else {
                    alert('Failed to Sign Up');
                }
            })
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
                
                <label>Name</label>
                <input type='text' value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage);