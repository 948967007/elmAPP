import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from "react-router-dom"
import App from './App';

// Provider 高阶组件  作用把状态传递到各个组件
import {Provider} from "react-redux"
// createStore 创建仓库  用来存储信息 比如用户信息  位置信息  登录信息
import {createStore} from "redux"

import Reducers from "./reducers/index"

import "./indexCss/index.scss"
import "antd/dist/antd.css"

// 创建store
const store = createStore(
	Reducers,
)
ReactDOM.render(
	// <Router>
	<Provider store={store}>
		<App />
	</Provider>,
	// </Router>,
	document.getElementById('root')
);

