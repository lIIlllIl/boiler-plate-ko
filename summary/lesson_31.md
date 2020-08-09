# 31장
#### 내용
```sh
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
                    alert(props.history);
                    // props.history.push('/');
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

export default RegisterPage;
```
- /client/src/components/views/RegisterPage.js

```sh
// reducer로 반환할 type을 types.js에서 가져옴 

import {
    LOGIN_USER, 
    REGISTER_USER
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
        case REGISTER_USER : 
            return { ...state, register : action.payload }
            break;
        default:
            return state;
    }
}

```
- /client/src/_reducers/user_reducer.js

```sh
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
```
- /client/src/_actions/user_action.js
