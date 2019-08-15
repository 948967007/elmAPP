import React, { Component } from 'react'
import FootNav from '../../footNav/FootNav';
import {Link} from "react-router-dom"
import "./css/my.scss"
export default class My extends Component {
   render() {
      return (
         <div>
            <Link to="/login">
               <div className="loginPage">
                  <div className="reglogin">
                     <div className="elmImg">
                        <img src={require("./img/1.png")} alt=""/>
                     </div>
                     <div className="loginBtn">
                        <p>登录/注册</p>
                        <span> <i className="iconfont icon-shouji"></i> 登录后享受更多特权</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>

                  <div className="money">
                     <div className="moneyBtn redPacket">
                        <img src={require("./img/2.png")} alt=""/>
                        <span>红包</span>
                     </div>
                     <div className="moneyBtn gold">
                        <img src={require("./img/3.png")} alt=""/>
                        <span>金币</span>
                     </div>
                  </div>
               </div>
            </Link>
            
            <div className="myServe">
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/4.png")} alt=""/>
                        <span>我的地址</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="myServe">
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/5.png")} alt=""/>
                        <span>金币商城</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/6.png")} alt=""/>
                        <span>分享拿20元现金</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="myServe">
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/7.png")} alt=""/>
                        <span>我的客服</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/8.png")} alt=""/>
                        <span>下载饿了么APP</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="myServe">
               <Link to="/hintLogin">
                  <div className="mySite">
                     <div className="mySite1">
                        <img src={require("./img/9.png")} alt=""/>
                        <span>规则中心</span>
                     </div>
                     <div className="arrowRight-fill">
                        <i className="iconfont icon-arrowRight-fill"></i>
                     </div>
                  </div>
               </Link>
            </div>

            
            
            
            <FootNav />
         </div>
      )
   }
}
