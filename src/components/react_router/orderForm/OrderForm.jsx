import React, { Component } from 'react'
import FootNav from '../../footNav/FootNav';
import {Link} from "react-router-dom"
import { Button } from 'antd';
import 'antd/dist/antd.css'
import "./css/orderForm.scss"
export default class OrderForm extends Component {
   render() {
      return (
         <div>
            <div className="oForm">
               <img src={require("./img/2.png")} alt=""/>
            </div>
            <h3 className="OFhint">登录后查看外卖订单</h3>

            
            <div className="OFhint">
               <Link to="/login">
                  <Button className="reg" type="primary">立即登录</Button>
               </Link>
            </div>
            <FootNav />
         </div>
      )
   }
}
