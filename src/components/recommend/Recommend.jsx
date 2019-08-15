import React, { Component } from 'react'

import "./css/recommend.scss"
export default class Recommend extends Component {
   render() {
      return (
         <div>
            {/* 推荐 */}
            <div className="recommend">
					<img src={require("../../static/img/recommend/1.png")} alt="" />
				</div>			
				<div className="home-filter">
					<ul>
						<li>综合排序 <i className="sanjiaodown iconfont icon-sanjiaodown" ></i> </li>
						<li>距离最近</li>
						<li>品质联盟</li>
						<li>筛选 <i className="shaixuan iconfont icon-shaixuan"></i> </li>
					</ul>
				</div>
         </div>
      )
   }
}
