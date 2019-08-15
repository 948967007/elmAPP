import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./css/footNav.scss"
export default class FootNav extends Component {
   render() {
      return (
         // 底部导航
         <div className="footNav">
            <NavLink exact activeClassName="active" to="/">
               <i className="iconfont icon-changyonglogo40"></i>
               <span>首页</span>
            </NavLink>
            <NavLink to="/find">
               <i className="iconfont icon-find"></i>
               <span>发现</span>
            </NavLink>
            <NavLink to="/orderForm">
               <i className="iconfont icon-ico-jnljxsdd"></i>
               <span>订单</span>
            </NavLink>
            <NavLink to="/my">
               <i className="iconfont icon-yonghu"></i>
               <span>我的</span>
            </NavLink>
         </div>
      )
   }
}
