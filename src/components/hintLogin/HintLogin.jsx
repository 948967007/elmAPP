import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Button } from 'antd';
import 'antd/dist/antd.css'
import "../react_router/orderForm/css/orderForm.scss"
export default class OrderForm extends Component {
   render() {
      return (
         <div>
            <div className="oForm">
               <img src={require("../react_router/orderForm/img/1.png")} alt=""/>
            </div>
            <h3 className="OFhint">请先登录</h3>

            <Link to="/login">
               <div className="OFhint">
                  <Button className="reg" type="primary">立即登录</Button>
               </div>
            </Link>
         </div>
      )
   }
}