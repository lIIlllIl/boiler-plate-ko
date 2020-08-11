import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

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

export default App;
