import React, { Component } from 'react'
import {
	Switch,
	Route,
} from "react-router-dom"
import Home from '../components/home/Home';
import Sousuo from '../components/react_router/sousuo/Sousuo';
import List from '../components/react_router/categoryList/List';
import Find from '../components/react_router/find/Find'
import My from '../components/react_router/my/My'
import OrderForm from '../components/react_router/orderForm/OrderForm'
import Login from '../components/login/Login'
import HintLogin from '../components/hintLogin/HintLogin'
import ProductList from '../components/react_router/productList/ProductList';
export default class Routers extends Component {
   render() {
      return (
         // 项目 总路由
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/find" component={Find} />
            <Route path="/orderForm" component={OrderForm} />
            <Route path="/my" component={My} />
            <Route path="/sousuo" component={Sousuo} />
            <Route path="/category/list:id" component={List} />
            <Route path="/login" component={Login}/>
            <Route path="/hintLogin" component={HintLogin}/>
            <Route path="/productList:id" component={ProductList} />
         </Switch>
      )
   }
}
