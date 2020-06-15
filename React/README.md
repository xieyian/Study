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

## HTML to JSX
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