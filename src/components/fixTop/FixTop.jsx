import React, { Component } from 'react'
import { Link} from "react-router-dom"
import "./css/fixTop.scss"



export default class FixTop extends Component {
   render() {
      return (
         // 吸顶盒 
			<div className="fixTop">
            <Link to="/sousuo"> <i className="sousuo iconfont icon-sousuo"></i> 搜索饿了么商家、商品名称</Link>
         </div>
      )
   }
}
