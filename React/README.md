# React 

## inseart Node.js first

## Create react project
```sh
create-react-app project-name
```

## New react project have:
- Webpack
- Babel
- Dev Server
  
## Start and stop the react project
```sh
cd projectdir
npm start   //start
^C  //stop
```


- Start project
- Delete all the files in src and create "index.js"
- Import the thing you need 
  - import React from 'react';
  - import ReactDOM from 'react-dom';
  - **<span style="color: green">import</span>** set-your-own-name **<span style="color: green">from</span>** 'packege name';

- Create react component // in index.js
- Take react component and show it on the screen  // in jindex.js

## HTML to JSX <in jsx file>
- style:
  ```HTML
  <div style="background-color: red;"> </div>
  ```
  ```JSX
  <div style={{backgroundColor:'red'}}> </div>
  ```
- class and classname:
  ```HTML
  <div class="top"></div>
  ```
  ```JSX
  <div className="top"></div>
  ```
- can easy referencing to javascript vairable
  - it can't reference to javascript object:
    ```Javascript
    const a = { test: "hello world!"};
    <div>{a}</div>
    ```
  - but it can reference to:
    ```Javascript
    const a = { test: "hello world!"};
    <div>{a.test}</div>
    ```

##  input Semantic Ui <in components file>
```Html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## install faker.js 创建虚假信息图片头像。。。
```sh 
npm install --save faker
```

## Create Component <in components file>
1. create xxx.js in src
2. inside xxx.js should have 
   - ```import React from 'react';```
   - the code you need 
   - ```export default CommentDetail;```
3. to use it in index.js in src
   - ``` import CommentDetail from './xxx';```
   - use by ```<xxx  />```


# props 用来传送更改变量
- props （可以改变传送不同的变量）例如传送不同的名字
  - 在 xxx.js中 
    ```JSX
    const xxx = (props) => {
      return props.name;
    };
    ```
  - 在index.js中
    ```jsx
    <xxx name="Andy or Lisa..." /> 
    ```
- children (可以代替div, h1... 使用）
  - 在 xxx.js中 
    ```JSX
    const xxx = (props) => {
      return <div className="aa bb cc ....">{props.children}</div>
    };
    ```
  - 在index.js中
    ```jsx
    <div className="aa bb cc ....">{<h1></h1>....一堆东西}</div>
    //变成
    <xxx>{<h1></h1>....一堆东西}</xxx>
    ```
  
  # Class Components and Function Components
  ## states --- seasons react project
  - state is a js object that contains data relevant to a component
  - state can only be updated using the function 'setState'
  - use ```setState()``` to update value

  state必须有下面两个function
  ```
   constructor(props) {
        super(props);
        //must use this.state 来定义需要的variable。
        this.state = {a: 1};
    }

    // have to define render!!
    render() {
    }
  ```

  ## lifecycle
  ``` 
  componentDidMount() {} //加载运行一次
  componentDidUpdate() {} //update(setState())运行一次 之前会运行 render()
  ```

  in componment can use default props for the function: 
  ```componentName.defaultProps{ ..... };```
  
  # Hooks

  # Redux

  # user input and search

  ## event handlers
  user clicks on something 
  -```onClick(){...}```
  user change text in an input 
  -```onChange(){...}```
  user submit a form 
  -```onSubmit(){...}```

  ## Controlled and Uncontrolled
  dont let the page reflash after press RETURN
  ```event.preventDefault();```

  ## use arrow function to fix the error (cannot read property '...' of underfined)
  ## arrow function

  ## Axios and Fetch

  ### async and await

  ## React Refs
  give access to a single DOM element