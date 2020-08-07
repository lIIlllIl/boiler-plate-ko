# 28장
#### 내용
- react component 
    - class component
    - functional component 

- class component(React 16.8 이전)

```sh
import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}
```
- functional component보다 더 많은 기능 제공
    - react component life cycle method 지원 
- 코드가 길어진다.
- 코드가 복잡해진다.
- 성능면에서 빨라진다.

- functional component(React 16.8 이전)

```sh
import React from 'react';
export default function Hello {
    return (
        <div>
            Hello World
        </div>
    )
}
```
- class component보다 한정적인 기능 제공
    - react component life cycle method 지원하지 않음
- 코드가 짧아진다
- 코드가 간결해진다
- 성능면에서 빨라진다

- react component life cycle 
![1](./images/28-1.png)
- Mount category 
    - DOM이 생성되고 웹 브라우저 상에 나타나는 것 
    - 실행 순서
        1. 새로운 component 생성 
        2. constructor : component를 생성할 때 마다 호출되어 기본값 설정을 진행하는 method
        3. getDerivedStateFormProps : props의 값을 state와 동기화 시키는 method
        4. render : UI를 rendering하는 method 
        5. componentDidMount : component가 웹 브라우저 상에 나타난 후에 호출되는 method
- Update category 
    - component를 업데이트 하는 것 
        - props가 변경될 경우 
        - state가 변결될 경우
        - 부모 컴포넌트가 리렌더링 될 경우 
        - this.forceUpdate를 통해 강제로 렌더링을 트리거할 경우 
    - 실행 순서
        1. props 변경 혹은 부모 component re-rendering
        2. getDerivedStateFromProps : props에 있는 값을 state와 동기화시키는 method 
        3. state 변경
        4. shouldComponentUpdate : component가 re-rendering을 수행할지 결정하는 method 
        해당 method가 false를 반환할 시 아래의 method는 호출되지 않음 
        5. forceUpdate : props 또는 state가 아닌 다른 data에 의해 render를 호출해야 할 필요가 있을 경우 이를 알려주는 역할을 수행하는 method 
        6. render
        7. getSnapshotBeforeUpdate : Component의 변화를 DOM에 반영하기 전의 DOM 상태를 저장하기 위해 호출되는 method 
        8. 웹 브라우저 DOM 변화 
        9. componentDidUpdate : component의 갱신 작업이 완료된 이후에 호출되는 method

- Unmount 
    - component를 DOM에서 제거하는 것 
    - 실행 순서 
        1. Unmount 
        2. componentWillUnmount : component가 웹 브라우저 상에서 사라지기 전에 호출되는 method 

- class component(React 16.8 이후, react component life cycle)
```sh
import React, { Component } from 'react';
import Axios from 'axios';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }
    
    componentDidMount() {
        Axios.get('/name')
            .then(response => {
            this.setState({name : response.data.name)}
        })
    }
    
    render() {
        return (
            <div>
                Hello {this.state.name}
            </div>
        )
    }
}
```

- functional component(React 16.8 이후, react component life cycle)
```sh
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Hello {
    const [Name, setName] = useState("");
    
    useEffect(() => {
        Axios.get('/name')
            .then(response => {
                setName(response.data.name)
            })
    }, []);
    
    return (
        <div>
            Hello {Name}
        </div>
    )
}
```