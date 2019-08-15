import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./css/login.scss"
export default class Login extends Component {
   render() {
      return (
         <div id="login">
            <div className="logo">
               <img src={require("./img/logo.png")} alt=""/>
            </div>
            <Form className="login-form">
               <Form.Item>
                  <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="输入用户名"
                  />
               </Form.Item>
               <Form.Item>
                  <Input
                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     type="password"
                     placeholder="请输入密码"
                     />
               </Form.Item>
               <span>
                  新用户登录即自动注册，并表示已同意<Link to="">《用户服务协议》</Link>和<Link to="">《隐私权政策》</Link> 
               </span>
               <Form.Item>
                  <div className="regBut">
                     <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                     </Button>
                  </div>
                  <div className="aboutUa">
                     <Link to="">关于我们</Link>
                  </div>
               </Form.Item>
            </Form>
         </div>
      )
   }
}
