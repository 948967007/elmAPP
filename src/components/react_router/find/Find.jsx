import React, { Component } from 'react'

import {Link } from "react-router-dom";
import "./css/find.scss";
import FootNav from '../../footNav/FootNav';
export default class Find extends Component {
   render() {
      return (
         <div>
            <div className="timeLogo">
               <img src={require("./img/time.png")} alt=""/>
            </div>
            <ul className="findCommodity">
               <li>
                  <Link to="/find/findmore">
                     <div className="findTime">
                        <span>限时优惠</span>

                     </div>
                     <div className="findImg">
                        <img src={require("./img/1.webp")} alt=""/>

                     </div>
                     <div className="findInfo">3元品质联盟红包</div>
                     <div className="findPrice">
                        <span>90金币</span>
                        <del>￥3</del>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/find/findmore">
                     <div className="findTime">
                        <span>特价换购</span>

                     </div>
                     <div className="findImg">
                        <img src={require("./img/2.webp")} alt=""/>

                     </div>
                     <div className="findInfo">数码经络按摩仪</div>
                     <div className="findPrice">
                        <span>9金币</span>
                        <del>￥239</del>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/find/findmore">
                     <div className="findTime">
                        <span>特价换购</span>

                     </div>
                     <div className="findImg">
                        <img src={require("./img/3.webp")} alt=""/>

                     </div>
                     <div className="findInfo">悬浮机械手感套装</div>
                     <div className="findPrice">
                        <span>9金币</span>
                        <del>￥129</del>
                     </div>
                  </Link>
               </li>
            </ul>
            <div className="findMore">
               <Link to="/find/findmore">查看更多></Link>
            </div>

            <FootNav />
         </div>
      )
   }
}
