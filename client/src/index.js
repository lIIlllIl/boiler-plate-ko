import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 애플리케이션(App)에 redux를 연결하기 위해 react-redux의 Provider를 가져옴 
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

// redux store가 function과 promise도 인식할 수 있도록 각 모듈에서 필요한 부분을 가져옴 
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

// Reducer 사용을 위해 가져옴 
import Reducer from './_reducers';

// redux store가 function과 promise도 인식할 수 있도록 middleware를 가져와서 redux store를 생성
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(Reducer, 
        // Redux Extension 연동
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
