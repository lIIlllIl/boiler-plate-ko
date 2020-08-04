# 20장
#### 용어
- react-router-dom 
    - 리액트의 서드파티 라이브러리로 화면전환을 도와주는 역할
    - 해당 요청에 맞는 컴포넌트만 라우팅하여 부분적으로 렌더링하는 기능을 제공
    - Single Page APplication(React)에서 다얗안 기능의 웹페이지가 있을 경우 그 웹페이지와 1:1로 대응하는 HTML 파일들을 모두 생성하는 것이 아닌 단 하나의 HTML 파일에서 Header, Fooer와 같은 공통적인 부분을 제외한 각 기능의 컴포넌트만 교체해주는 방식

#### 내용 

```sh
function App() {
  return (
    <Router>
      <div>
        {
          
        }
        <Switch>
          <Route exact path="/" component = {LandingPage} />

          <Route exact path="/login" component = {LoginPage} />

          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```
- client/App.js
- URL에 따라 LandingPage / LoginPage / RegisterPage로 렌더링
- exact : path에 입력된 URL과 정확히 일치할 경우에만 렌더링하겠다는 의미 
 - https://reactrouter.com/web/example/basic 참조

```sh
<Route exact path="/" component = {LandingPage} />
```

```sh
<Route exact path="/">
     <LandingPage />
</Route>
```
- 두 개의 코드는 동일한 동작을 수행하는 코드 