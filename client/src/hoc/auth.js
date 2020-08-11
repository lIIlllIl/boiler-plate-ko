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