import React, { useEffect } from 'react'
import axios from 'axios';

// props.history가 undefined가 되지 않도록 router로 감싸줌 
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

function LandingPage(props) {
    // logout handler 
    const onClickHandler = () => {
        // 추가적인 작업이 필요하지 않으므로 곧장 axios를 통해 get방식으로 server에 로그아웃 요청 
        axios.get('/api/users/logout')
             .then(response => {
                 // 로그아웃 성공 시 LoginPage로 이동
                 if(response.data.success) {
                     props.history.push("/login");
                 }
                 // 로그아웃 실패 시 경고창 출력 
                 else {
                     alert('로그아웃에 실패했습니다.')
                 }
                 console.log(response.data);
             })
    };
    const dispatch = useDispatch();

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <br/>
            <button onClick={onClickHandler} >
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage);
